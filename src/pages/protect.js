import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Protect = () => {
  const [me, setMe] = useState(null);

  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    const getUser = async () => {
      const response = await fetch(`http://localhost:3000/api/users/1`);

      if (!response.ok) {
        router.push("/");
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
