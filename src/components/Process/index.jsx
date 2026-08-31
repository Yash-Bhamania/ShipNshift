import { ClipboardList, CalendarCheck, Truck } from "lucide-react";
import './process.scss'


const Process = () => {
  return (
<section className="process-section">
  <div className="container">
    <div className="process-header">
      <span className="section-eyebrow">HOW IT WORK</span>
        <h2>Moving Your Vehicle Is Simple</h2>


        <p>
            From getting your quote to receiving your vehicle, we make
            the entire transportation process simple and stress-free.
          </p>

    </div>
    <div className="process-steps">
       <article className="process-step">
            <div className="step-number">01</div>

            <div className="step-icon">
              <ClipboardList size={28} strokeWidth={1.8} />
            </div>

            <h3>Get a Quote</h3>

            <p>
              Tell us about your vehicle, pickup location, and destination
              to get started.
            </p>
          </article>

          <article className="process-step">
            <div className="step-number">02</div>

            <div className="step-icon">
              <CalendarCheck size={28} strokeWidth={1.8} />
            </div>

            <h3>Schedule Your Move</h3>

            <p>
              Choose your preferred pickup and delivery details that work
              for your schedule.
            </p>
          </article>

          <article className="process-step">
            <div className="step-number">03</div>

            <div className="step-icon">
              <Truck size={28} strokeWidth={1.8} />
            </div>

            <h3>We Handle the Transport</h3>

            <p>
              We take care of the transportation while keeping your vehicle
              safe throughout the journey.
            </p>
          </article>
    </div>
  </div>
</section>
  )
}

export default Process