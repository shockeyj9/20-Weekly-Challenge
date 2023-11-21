import pic from "../assets/profile_pic.jpg"


export default function About() {
  return (
    <section id="about">
    <h1>About Me</h1>
    <article>
    <img src={pic} alt="me" className="profile-pic"/>
    <p className="skills">My name is Jessie Shockey and I am a full stack web developer. I come from a background in the Behavioral Health, Mental Health, and Substance Abuse as a Billing 
    and Collections Specialist.
    <br />
    <br />
    I have also worked as a Software Support Specialist for an Electronic Health Record platform. 
    I found that developers often lacked the nuanced knowledge of commercial and government insurance billing requirements. This lack of knowledge led to 
     gaps within the software's functionality.
     <br />
    <br />
    My professional goal is to help bridge that functional gap between agencies and their Revenue Cycle Managment software, to create more flexible billing processes
    which accommodates the ever changing billing requirements that agnecies face.
    </p>
    </article>
</section>
  );
}
