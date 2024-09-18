import { Helmet } from 'react-helmet-async';
const AboutPage = () => {
  // Internal Styles
  const myButtonStyle = {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "purple",
    border: "none",
    padding: "10px 20px",
    marginRight: "10px"
  };

  return (
    <>
      <div>
      <Helmet>
        <title>About</title>
      </Helmet>
        <h1>About Us</h1>
        {/* Inline Styles */}
        <p
          style={{
            color: "green",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          quidem.
        </p>

        {/* Internal Styles  */}
        <button style={myButtonStyle}>Subscibe Monthly Plan</button>
        <button style={myButtonStyle}>Subscribe Annual Plan</button>
      </div>
      <div>testing</div>
    </>
  );
};

export default AboutPage;
