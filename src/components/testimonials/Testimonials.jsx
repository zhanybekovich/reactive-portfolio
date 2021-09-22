import "./testimonials.scss";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ivanov Ivan",
      title: "Ceo of Apple",
      img: "https://images.unsplash.com/photo-1575578375158-f05d916ed533?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Praesentium non voluptates molestias ducimus ratione voluptatem ad       minima dolores odio quae, reiciendis inventore exercitationem earum quibusdam rerum pariatur maxime. Alias, qui.",
    },
    {
      id: 2,
      name: "Marry Pete",
      title: "Designer",
      img: "https://images.unsplash.com/photo-1631606128513-d2500f465962?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=353&q=80",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium non voluptates molestias ducimus ratione voluptatem ad minima ",
      featured: true,
    },
    {
      id: 3,
      name: "Vasya Pupkin",
      title: "Happy Customer",
      img: "https://images.unsplash.com/photo-1631680987821-ac7aab389d31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Praesentium non voluptates molestias ducimus ratione voluptatem ad       minima dolores odio quae, reiciendis inventore exercitationem earum quibusdam rerum pariatur maxime. Alias, qui.",
    },
  ];
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials__container">
        {data.map((testimonial) => (
          <div
            className={
              testimonial.featured
                ? "testimonials__card testimonials__card--featured"
                : "testimonials__card"
            }
            key={`${testimonial.name}_${testimonial.id}`}
          >
            <div className="testimonials__top">
              <img src={testimonial.img} alt={testimonial.name} />
            </div>
            <div className="testimonials__center">
              <p>{testimonial.description.slice(0, 100) + "..."}</p>
            </div>
            <div className="testimonials__bottom">
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
