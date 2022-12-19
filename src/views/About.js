import { Link } from "react-router-dom";
export function About() {
  return (
    <section className="section">
      <div id="pic">
        <h1 className="about">About Us</h1>
        <div type="text" className="auText">
          This website is a project done by Mohammad kachcosh ,Sumeya Bayram and
          Nariman Haidar.
          <br></br>
          <br></br>Feel free to contact us at{" "}
          <a href="mailto:naro@gmail.com">naro@kth.se</a> for feedback or business
          inquiries.
          <h1 className="about">MyBooky</h1>
          <div type="text" className="infoText2">
            A reading application called MyBooky caters to all readers who
            desire to enjoy reading. The program is just a web page where users
            can take pleasure in reading books. The program is unique in that it
            allows users to save all of the books they want to read later and
            return to them whenever they want because they only need to check in
            to the website for it to save all of their books. On "My Account",
            you can see a list of games that you have upvoted. To delete an
            upvote, you can either go to my account and remove it from there or
            do it directly where you made the upvote by clicking the arrow
            button again.
            <br />
            <br />
            The user can browse the various material on the website by using the
            fixed navbar.
          </div>
        </div>
      </div>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  );
}
