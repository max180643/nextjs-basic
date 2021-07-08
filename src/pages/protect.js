import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Protect = () => {
  const [me, setMe] = useState(null);

  const router = useRouter();

  console.log(router);

  useEffect(() => {
    let isMounted = true;

    const getUser = async () => {
      const response = await fetch(`http://localhost:3000/api/users/6`);

      if (!response.ok) {
        // router.push("/");
        // router.replace("/") ไม่เก็บ history เวลากด back
        router.push({ pathname: "/", query: { search: "params" } });
      } else {
        const data = await response.json();

        if (data) {
          if (isMounted) {
            setMe(data);
          }
        } else {
          router.push("/");
        }
      }
    };

    getUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>{!me ? "Loading..." : `${me.name}'s dashboard`}</h1>
    </div>
  );
};

export default Protect;
