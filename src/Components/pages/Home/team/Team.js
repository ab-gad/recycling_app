import "./team.css"
import TeamCard from "./TeamCard";

function Team (){
    return(
        <section id="team" className="text-center">
            <div className="container py-5">
                <div className="title mb-4">
                    <h5 className="green">get in touch with</h5>
                    <h2>
                        Our Team Members
                    </h2>
                </div>
                <div className="row row-cols-2 justify-content-center row-cols-sm-2 row-cols-lg-5 g-4">
                    <TeamCard 
                        src={require('./team/team1.png')}
                        name="Ahmed Magdy"
                        title="Web Developer"
                        bgColor="lavender"
                        facebook="https://www.facebook.com/profile.php?id=100010057786833"
                        github="https://github.com/691997"
                        linkedin="https://www.linkedin.com/in/ahmed-magdy-iti/"
                    />
                     <TeamCard 
                        src={require('./team/team2.png')}
                        name="Adham Atef"
                        title="Web Developer"
                        bgColor="antiquewhite"
                        facebook="https://www.facebook.com/adham.atef8585"
                        github="https://github.com/Adham45"
                        linkedin="https://www.linkedin.com/in/adham-atef/"
                    />
                     <TeamCard 
                        src={require('./team/team3.png')}
                        name="Ahmed Dewidar"
                        title="Web Developer"
                        bgColor="lavender"
                        facebook="https://www.facebook.com/profile.php?id=100002240839905"
                        github="https://github.com/ahmedewaidar22"
                        linkedin="https://www.linkedin.com/in/ahmed-dewaidar/"
                    />
                     <TeamCard 
                        src={require('./team/team4.png')}
                        name="Ahmed Nabil"
                        title="Web Developer"
                        bgColor="antiquewhite"
                        facebook="https://www.facebook.com/ahmed.alex.3762"
                        github="https://github.com/AhmedNabil1994"
                        linkedin="https://www.linkedin.com/in/ahmednabilahmed/"
                    />
                     <TeamCard 
                        src={require('./team/team5.png')}
                        name="Abdulrahman Gad"
                        title="Web Developer"
                        bgColor="lavender"
                        facebook="https://www.facebook.com/AbdulRahman.Gad97"
                        github="https://github.com/ab-gad"
                        linkedin="https://www.linkedin.com/in/ab-gad/"
                    />                   
                </div>
            </div>
        </section>
    )
}

export default Team;