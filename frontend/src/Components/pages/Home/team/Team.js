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
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4">
                    <TeamCard 
                        src={require('./team/team1.png')}
                        name="Ahmed Magdy"
                        title="Web Developer"
                        bgColor="lavender"
                    />
                     <TeamCard 
                        src={require('./team/team2.png')}
                        name="Adham Atef"
                        title="Web Developer"
                        bgColor="antiquewhite"
                    />
                     <TeamCard 
                        src={require('./team/team3.png')}
                        name="Ahmed Dewidar"
                        title="Web Developer"
                        bgColor="lavender"
                    />
                     <TeamCard 
                        src={require('./team/team4.png')}
                        name="Ahmed Nabil"
                        title="Web Developer"
                        bgColor="antiquewhite"
                    />
                     <TeamCard 
                        src={require('./team/team5.png')}
                        name="Abdulrahman Gad"
                        title="Web Developer"
                        bgColor="lavender"
                    />
                    
                </div>
            </div>
        </section>
    )
}

export default Team;