import CompanionsList from '@/components/CompanionsList'
import CompanionCard from '@/components/ui/CompanionCard'
import CTA from '@/components/CTA'

const Page = () => {
  return (
    <div>
      <h1 >Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="2"
          name="Artifika"
          topic="Learn React"
          subject="React"
          duration={30}
          color="#ffda6e"
        />
        <CompanionCard 
          id="3"
          name="Jane Doe"
          topic="Learn Testing"
          subject="Testing"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard 
          id="1"
          name="John Doe"
          topic="How to learn AI"
          subject="AI"
          duration={30}
          color="#bde7ff"
        />
      </section>
      <section className='home-section'>
        <CompanionsList />
        <CTA />
      </section>
    </div>
  )
}

export default Page