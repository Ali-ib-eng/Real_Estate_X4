import Sparkles from '../Sparkles/Sparkles'
import TheTeamCard from '../TheTeamCard/TheTeamCard'
import Title from '../Title/Title'
import './meetTheEstateinTeam.css'

const MeetTheEstateinTeam = () => {
    let teamdata = [
        {
            image: '/assets/img/About/ABOUTS-max.png',
            name: 'Max Mitchell',
            job: 'Founder',
        },
        {
            image: '/assets/img/About/ABOUTS-sarah.png',
            name: 'Sarah Johnson',
            job: 'Chief Real Estate Officer',
        },
        {
            image: '/assets/img/About/ABOUTS-david.png',
            name: 'David Brown',
            job: 'Head of Property Management',
        },
        {
            image: 'assets/img/About/ABOUTS-michael.png',
            name: 'Michael Turner',
            job: 'Legal Counsel',
        }
    ]
    return (
        <div className='meetTheEstateinTeamContainer'>
            <Sparkles />
            <Title
                title='Meet the Estatein Team'
                subTitle='At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.'
            />
            <div className="teamCardsContainer">
                {teamdata.map((card, index) => (
                    <TheTeamCard
                        key={index}
                        image={card.image}
                        name={card.name}
                        job={card.job}
                    />
                ))}
            </div>
        </div>
    )
}

export default MeetTheEstateinTeam
