export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-10 text-gray-800 bg-white shadow-lg rounded-xl my-10">

      <header className="text-center border-b border-gray-300 pb-6">
        <h1 className="text-4xl font-bold">
          Krystenae Dennis
        </h1>

        <p className="mt-2 text-gray-600">
          Brandon, FL | (813) 952-6338 | krystenaedennis@gmail.com
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Professional Summary
        </h2>

        <p>
          Motivated and detail-oriented professional with experience in customer
          service, business operations, and education support. Skilled in
          communication, organization, and client relations, with a strong
          ability to manage multiple priorities efficiently.
        </p>
      </section>

      <section className="mt-8 border-t border-gray-200 pt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Education
        </h2>

        <p>
          <strong>University of South Florida</strong> — Bachelor of Science in
          Business Analytics (Cybersecurity Concentration), Expected May 2027
        </p>

        <p className="mt-2">
          <strong>Hillsborough Community College</strong> — Associate Degree in
          Business Administration, May 2025
        </p>

        <p className="mt-2">
          <strong>Tampa Bay Technical High School</strong> — High School
          Diploma, May 2022
        </p>
      </section>

      <section className="mt-8 border-t border-gray-200 pt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Work Experience
        </h2>

        <div className="mb-4">
          <h3 className="font-bold">Assistant Teacher</h3>
          <p className="text-gray-500 text-sm">
            Discovery Point Child Development Center | Apr 2024 – Present
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Substitute Teacher K–12</h3>
          <p className="text-gray-500 text-sm">
            Kelly Educational Services | Mar 2024 – Apr 2024
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Licensed Health Insurance Agent</h3>
          <p className="text-gray-500 text-sm">
            Open Access Insurance | Jun 2023 – Dec 2023
          </p>
        </div>

        <div>
          <h3 className="font-bold">Walmart Associate / Delivery Driver</h3>
          <p className="text-gray-500 text-sm">
            Walmart | Dec 2020 – Jul 2023
          </p>
        </div>
      </section>

      <section className="mt-8 border-t border-gray-200 pt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Skills
        </h2>

        <ul className="list-disc ml-6">
          <li>Customer Service</li>
          <li>Microsoft Word, Excel, and PowerPoint</li>
          <li>Data Entry</li>
          <li>Business Administration</li>
          <li>Organization and Time Management</li>
          <li>Problem Solving</li>
          <li>Teaching and Training Support</li>
          <li>Team Collaboration</li>
          <li>Active Listening</li>
        </ul>
      </section>

      <section className="mt-8 border-t border-gray-200 pt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Certifications & Licenses
        </h2>

        <ul className="list-disc ml-6">
          <li>Substitute Teaching Certification</li>
          <li>Internet Business Associate</li>
        </ul>
      </section>

    </main>
  );
}