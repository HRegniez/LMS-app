import CompanionsList from '@/components/CompanionsList'
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <div className='mx-auto max-w-7xl pt-8'>
      <h1>Popular Companions</h1>
      <section className='home-section mt-4'>
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
      <section className='home-section mt-12'>
        <CompanionsList 
          title="Recently Viewed Lessons"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </div>
  )
}

export default Page