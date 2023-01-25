import { profiles } from "./profiles/profiles";

const ProfilesD = () => {
  return (
    <section data-transition={"none"} className={"h-full mt-20"}>
      <h2>{"Profiles"}</h2>
      <pre className={"h-2/3"}>
        <div className={"mb-5"}>
          <code data-line-numbers>{`# .env
COMPOSE_PROFILE=`}</code>
        </div>
        <div className={"h-full"}>
          <code className={"h-full"} data-line-numbers={"1-7"}>
            {profiles}
          </code>
        </div>
      </pre>
    </section>
  );
};

export default ProfilesD;
