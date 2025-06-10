import Image from "next/image"
import Link from "next/link"

const CTA = () => {
  return (
    <article className="cta-section">
      <div className="cta-badge">Start learning your way</div>
      <h2 className="text-2xl font-bold">
        Build and Personalize Learning Companions
      </h2>
      <p className="text-sm">
        Pick a name, subject, voice & personality - start learning through voice conversations with AI
      </p>
      <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
      <button className="btn-primary">
        <Link className="flex items-center gap-2" href="/companions/new">
          <Image src="/icons/plus.svg" alt="plus" width={12.5} height={12.5} />
          <p>Create Companion</p>
        </Link>
      </button>
    </article>
  )
}

export default CTA