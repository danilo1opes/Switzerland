export function Navbar() {
  return (
    <div>
      {/* fixed top-0 left-0 w-full */}
      <nav className="p-10 z-[999]">
        <div className="flex gap-4 items-center justify-between">
          <h1 className="text-4xl tracking-widest text-brand-secundary font-light font-ogg uppercase">
            Cosmos
          </h1>
          <div>
            <ul className="uppercase font-ogg flex gap-12 items-center cursor-pointer">
              <li>Blog</li>
              <li>About</li>
              <li className="text-brand-primary bg-brand-secundary p-4 px-8 rounded-3xl">
                Sing Up
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
