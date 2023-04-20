const people = [
  {
    name: 'Michael Matengula',
    role: 'MBA, PMP, Ph.D. Candidate Chairman & CEO',
    imageUrl:
      './assets/images/team/11.jpg',
    twitterUrl: '',
    linkedinUrl: 'https://www.linkedin.com',
    description: "is the CEO and Founder of Sharp Valley Holdings, a privately owned company head quartered in Texas, U.S.A. with interests in real estate development, investing brokerage, sales and marketing, and property management. He also works as a due diligence consultant assisting subject matter experts secure funding for their projects. Michael earned a BSc. Degree in Finance & Real Estate and is currently pursuing a Masters degree in Operations Management. He is a member of the Association of Chartered Certified Accountants (ACCA) U.S.A., and a board member in various organizations including RECAPS Solar, TICC Financials, Malawians in Texas Organization, and Brentwood Homeowners Association."
  },

  {
    name: 'Gloria Mbendera',
    role: 'Legal Counsel',
    imageUrl:
      './assets/images/team/3.jpg',
    twitterUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/gloria-mbendera-24674a171/',
    description: "is an experienced legal professional with extensive hands-on experience in banking, drafting, conveyance, advisory services, company secretarial services, advising clients on compliance risks and issues (e.g. Malawi Exchange Control legal framework), drafting wills, probate services, offering professional legal advice on employment and labor laws, company and corporate law, insurance law, debt collection, drafting pleadings, conducting research, drafting legal opinions and heads of arguments for litigation purposes, and civil litigation. "
  },
  {
    name: 'Henderson Chiwela',
    role: 'Senior Adviser',
    imageUrl:
      './team/avatar.png',
    twitterUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/gloria-mbendera-24674a171/',
    description: "is an experienced legal professional with extensive hands-on experience in banking, drafting, conveyance, advisory services, company secretarial services, advising clients on compliance risks and issues (e.g. Malawi Exchange Control legal framework), drafting wills, probate services, offering professional legal advice on employment and labor laws, company and corporate law, insurance law, debt collection, drafting pleadings, conducting research, drafting legal opinions and heads of arguments for litigation purposes, and civil litigation. "
  },
  {
    name: 'Alipo Butao',
    role: 'Project Manager',
    imageUrl:
      './team/avatar.png',
    twitterUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/gloria-mbendera-24674a171/',
    description: "is an experienced legal professional with extensive hands-on experience in banking, drafting, conveyance, advisory services, company secretarial services, advising clients on compliance risks and issues (e.g. Malawi Exchange Control legal framework), drafting wills, probate services, offering professional legal advice on employment and labor laws, company and corporate law, insurance law, debt collection, drafting pleadings, conducting research, drafting legal opinions and heads of arguments for litigation purposes, and civil litigation. "
  },
  {
    name: 'Peter Kumbani',
    role: 'Marketing Manager',
    imageUrl:
      './team/avatar.png',
    twitterUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/gloria-mbendera-24674a171/',
    description: "is an experienced legal professional with extensive hands-on experience in banking, drafting, conveyance, advisory services, company secretarial services, advising clients on compliance risks and issues (e.g. Malawi Exchange Control legal framework), drafting wills, probate services, offering professional legal advice on employment and labor laws, company and corporate law, insurance law, debt collection, drafting pleadings, conducting research, drafting legal opinions and heads of arguments for litigation purposes, and civil litigation. "
  },
  {
    name: 'Mwai Matengula',
    role: 'Executive Travel Consultant',
    imageUrl:
      './team/avatar.png',
    twitterUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/gloria-mbendera-24674a171/',
    description: "is an experienced legal professional with extensive hands-on experience in banking, drafting, conveyance, advisory services, company secretarial services, advising clients on compliance risks and issues (e.g. Malawi Exchange Control legal framework), drafting wills, probate services, offering professional legal advice on employment and labor laws, company and corporate law, insurance law, debt collection, drafting pleadings, conducting research, drafting legal opinions and heads of arguments for litigation purposes, and civil litigation. "
  }, 
  {
    name: 'Akuzike Maliwichi',
    role: 'MBA, Human Resource Manager',
    imageUrl:
      './team/avatar.png',
    twitterUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/gloria-mbendera-24674a171/',
    description: "is an experienced legal professional with extensive hands-on experience in banking, drafting, conveyance, advisory services, company secretarial services, advising clients on compliance risks and issues (e.g. Malawi Exchange Control legal framework), drafting wills, probate services, offering professional legal advice on employment and labor laws, company and corporate law, insurance law, debt collection, drafting pleadings, conducting research, drafting legal opinions and heads of arguments for litigation purposes, and civil litigation. "
  }, 
  {
    name: 'Lawrence Matengula',
    role: 'FCCA, CMA, MBA',
    imageUrl:
      './team/avatar.png',
    twitterUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/gloria-mbendera-24674a171/',
    description: "is an experienced legal professional with extensive hands-on experience in banking, drafting, conveyance, advisory services, company secretarial services, advising clients on compliance risks and issues (e.g. Malawi Exchange Control legal framework), drafting wills, probate services, offering professional legal advice on employment and labor laws, company and corporate law, insurance law, debt collection, drafting pleadings, conducting research, drafting legal opinions and heads of arguments for litigation purposes, and civil litigation. "
  },
]



export default function ManagementTeam() {
  return (
    <div className="bg-white">

      <div className="bg-white relative sm:pb-32 py-2 lg:py-2">

        <div className="relative">
          <div className="relative overflow-hidden bg-sky-300 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
            <div className="absolute inset-0">
              <img
                src="./tools/finding-temporary-housing-while-building-a-home-1200x800.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-brown opacity-60 mix-blend-multiply" aria-hidden="true" />

            </div>
            <div className="relative lg:col-span-1">

              <h2 className="text-3xl text-gray-100 font-bold  tracking-tight sm:text-4xl">Management Team</h2>
              <blockquote className="mt-6 text-white">
                <p className="text-xl text-white font-medium sm:text-2xl">
                  We dream, create, design, and build the most wonderful place in the world.
                </p>
                
              </blockquote>
            </div>
          </div>

        </div>
      </div>
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our team</h2>

          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src={person.imageUrl} alt="" />
                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-gray-600 opacity-70">{person.role}</p>
                    </div>
                    <ul role="list" className="flex justify-center space-x-5">
                      <li>
                        <a target="_blank" rel="noopener noreferrer" href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" rel="noopener noreferrer" href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>


    </div>
  )
}
