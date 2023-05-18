export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://reviewed-com-res.cloudinary.com/image/fetch/s--UJ2sGByA--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1597356287543/GettyImages-1171084311.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Tennis</h2>
        <p className="info">
          <a href="" className="author">
            Pranay Sood
          </a>
          <time>2023-05-18 15:47</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum
          labore inventore placeat deserunt repellat provident praesentium unde,
          quos officia aliquid officiis eveniet voluptates voluptas corrupti
          iusto! Qui, dolorem molestiae!
        </p>
      </div>
    </div>
  );
}
