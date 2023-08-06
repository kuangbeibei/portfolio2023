export const Nav = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-10">
      <span className="text-primaryColor hover:text-activeColor active:text-activeColor cursor-pointer">
        About
      </span>
      <span className="text-primaryColor hover:text-activeColor active:text-activeColor cursor-pointer">
        Work
      </span>
      <span className="text-primaryColor hover:text-activeColor active:text-activeColor cursor-pointer">
        Skill
      </span>
      <span className="text-primaryColor hover:text-activeColor active:text-activeColor cursor-pointer">
        Project
      </span>
    </nav>
  );
};
