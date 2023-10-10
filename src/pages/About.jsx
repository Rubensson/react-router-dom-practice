function About() {
  return (
    <div className="h-min-screen mx-auto p-4 lg:w-8/12">
      <h1 className="font-bold text-sm text-center py-8">ABOUT</h1>
      <div className="flex flex-col md:flex-row mb-4">
        <div id="text-content" className="py-4 md:px-4">
          <h2 className="text-lg font-bold text-zinc-800 mb-3">
            About Article Title
          </h2>
          <h3 className="text-sm font font-semibold text-zinc-500 mb-1">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            rerum ullam enim placeat, alias corrupti possimus cum, quasi, eum
            minus earum repellendus. Magni sed obcaecati magnam eos a,
            reprehenderit explicabo delectus! Totam vitae rem tempora saepe
            eius, facere at fugit!
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/14129146/pexels-photo-14129146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="md:w-6/12 saturate-0"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div id="text-content" className="py-4 md:px-4">
          <h2 className="text-lg font-bold text-zinc-800 mb-3">
            About Article Title
          </h2>
          <h3 className="text-sm font font-semibold text-zinc-500 mb-1">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            rerum ullam enim placeat, alias corrupti possimus cum, quasi, eum
            minus earum repellendus. Magni sed obcaecati magnam eos a,
            reprehenderit explicabo delectus! Totam vitae rem tempora saepe
            eius, facere at fugit!
          </p>
        </div>
        <img
          src="https://media.istockphoto.com/id/1211554164/es/foto/3d-render-de-conjunto-de-recogida-de-electrodom%C3%A9sticos.jpg?s=2048x2048&w=is&k=20&c=uDyM6iTXpuN4K5D3jLtRY6XxFTJvyGhC3VcsfbRY_dc="
          className="md:w-6/12"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
