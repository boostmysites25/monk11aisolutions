
// all services
export const services = [
  {
    title: "Web Applications",
    image: require("../assets/images/web-dev-vector.png"),
    shortDesc:
      "Transforming complex business logic into powerful, scalable, and user-centric web applications.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    detailsPageImages: {
      first: require("../assets/images/services/webdevelopment1.jpg"),
      second: require("../assets/images/services/webdevelopment2.png"),
      third: require("../assets/images/services/webdevelopment3.png"),
    },
    html: {
      firstSection: `<h2 class="heading-2 mb-6">
              Next-Generation Web Applications
            </h2>
            <p class="mb-6 text-lg text-gray-600 leading-relaxed">
              In an era defined by digital transformation, a static website is no longer enough. 
              Modern businesses thrive on interactivity, speed, and reliability. 
              At <span class="font-bold text-primary">Monk 11 AI Solutions</span>, we engineer robust 
              web applications that serve as the backbone of your digital operations. From enterprise 
              resource planning (ERP) tools to dynamic customer portals, we build systems that scale with you.
            </p>
  
            <h2 class="text-2xl font-bold mb-4 text-gray-800">
              Our Web Application Capabilities:
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-primary text-xl mb-2">Single Page Applications (SPAs)</h3>
                <p class="text-gray-600">Blazing fast, responsive apps that load instantly and provide a native-app-like experience in the browser.</p>
              </div>
              <div class="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-primary text-xl mb-2">Progressive Web Apps (PWAs)</h3>
                <p class="text-gray-600">Reliable capabilities that work offline, send push notifications, and install on home screens.</p>
              </div>
              <div class="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-primary text-xl mb-2">Enterprise Portals</h3>
                <p class="text-gray-600">Secure, role-based access systems for managing internal workflows, data, and communication.</p>
              </div>
              <div class="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-primary text-xl mb-2">E-Commerce Platforms</h3>
                <p class="text-gray-600">Custom storefronts with complex inventory management, payment processing, and analytics dashboards.</p>
              </div>
            </div>`,
      secondSection: `<h2 class="heading-2 mb-6">
                  Build Process & Tech Stack
                </h2>
                <div class="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    We leverage a modern tech stack to ensure your application is future-proof. Our development lifecycle is agile, transparent, and iterative.
                  </p>
                  <ul class="list-disc pl-6 space-y-2">
                    <li><strong class="text-gray-800">Architecture:</strong> Microservices or Monolithic architectures tailored to your scale.</li>
                    <li><strong class="text-gray-800">Backend:</strong> Robust APIs built with Node.js, Python, or Go.</li>
                    <li><strong class="text-gray-800">Frontend:</strong> Dynamic UIs using React, Vue, or Angular.</li>
                    <li><strong class="text-gray-800">Cloud & DevOps:</strong> Seamless deployment and CI/CD pipelines on AWS, Azure, or Vercel.</li>
                  </ul>
                </div>`,
      thirdSection: `<h2 class="heading-2 mb-6">Why Partner With Us?</h2>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="flex items-start gap-4">
                     <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                     <div>
                        <h4 class="font-bold text-lg">Scalability First</h4>
                        <p class="text-sm text-gray-500">Systems designed to handle millions of requests without breaking a sweat.</p>
                     </div>
                  </div>
                  <div class="flex items-start gap-4">
                     <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">2</div>
                     <div>
                        <h4 class="font-bold text-lg">Security Focused</h4>
                        <p class="text-sm text-gray-500">End-to-end encryption, regular audits, and compliance with global data standards.</p>
                     </div>
                  </div>
                </div>`,
    },
  },
  {
    title: "SAAS Solutions",
    image: require("../assets/images/saas-vector.png"),
    shortDesc:
      "End-to-end development of Software as a Service platforms, from MVP to enterprise scale.",
    technologies: ["AWS", "Stripe", "Redis", "Next.js", "GraphQL"],
    detailsPageImages: {
      first: require("../assets/images/services/saas-1.png"),
      second: require("../assets/images/services/saas-2.png"),
      third: require("../assets/images/services/saas-3.png"),
    },
    html: {
      firstSection: `<h2 class="heading-2 mb-6">
        Software as a Service (SaaS) Architecture
      </h2>
      <p class="mb-6 text-lg text-gray-600 leading-relaxed">
        Launching a SaaS product requires more than just code; it requires a strategic partner 
        who understands multi-tenancy, subscription billing, and user retention. 
        We help startups and enterprises build scalable SaaS platforms that act as 
        recurring revenue engines.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Our SaaS Expertise Include:</h2>
      <ul class="space-y-4">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 mt-2 bg-secondary rounded-full"></span>
          <div>
            <strong class="block text-gray-800">Multi-Tenant Architecture</strong>
            <span class="text-gray-500">Secure data isolation for every customer while maintaining a single codebase.</span>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 mt-2 bg-secondary rounded-full"></span>
          <div>
            <strong class="block text-gray-800">Subscription & Billing Management</strong>
            <span class="text-gray-500">Integration with Stripe, PayPal, or custom billing engines for seamless MRR tracking.</span>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 mt-2 bg-secondary rounded-full"></span>
          <div>
            <strong class="block text-gray-800">API-First Design</strong>
            <span class="text-gray-500">Built to integrate. Allow third-party developers to extend your platform's capabilities.</span>
          </div>
        </li>
      </ul>`,
      secondSection: `<h2 class="heading-2 mb-6">
      From Concept to MMR
    </h2>
    <p class="text-gray-600 mb-6">We don't just build; we guide you through the product lifecycle.</p>
    <div class="relative pl-8 border-l-2 border-primary/20 space-y-8">
      <div class="relative">
        <span class="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-white"></span>
        <h4 class="font-bold text-gray-800">MVP Development</h4>
        <p class="text-sm text-gray-500">Rapid prototyping to validate your core hypothesis in the market.</p>
      </div>
      <div class="relative">
        <span class="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-white"></span>
        <h4 class="font-bold text-gray-800">Product-Market Fit Iteration</h4>
        <p class="text-sm text-gray-500"> Agile sprints based on real user feedback and analytics.</p>
      </div>
      <div class="relative">
        <span class="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-accent border-4 border-white"></span>
        <h4 class="font-bold text-gray-800">Scaling & Growth</h4>
        <p class="text-sm text-gray-500">Infrastructure optimization to handle thousands of concurrent users.</p>
      </div>
    </div>`,
      thirdSection: `<h2 class="heading-2 mb-6">
      SaaS Metrics We Optimize
    </h2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      <div class="p-4 bg-gray-50 rounded-lg">
        <div class="text-3xl font-bold text-primary mb-1">99.9%</div>
        <div class="text-xs font-medium uppercase tracking-wider text-gray-500">Uptime</div>
      </div>
       <div class="p-4 bg-gray-50 rounded-lg">
        <div class="text-3xl font-bold text-primary/50 mb-1">&lt;200ms</div>
        <div class="text-xs font-medium uppercase tracking-wider text-gray-500">Latency</div>
      </div>
       <div class="p-4 bg-gray-50 rounded-lg">
        <div class="text-3xl font-bold text-accent mb-1">100%</div>
        <div class="text-xs font-medium uppercase tracking-wider text-gray-500">Secure</div>
      </div>
       <div class="p-4 bg-gray-50 rounded-lg">
        <div class="text-3xl font-bold text-gray-800 mb-1">24/7</div>
        <div class="text-xs font-medium uppercase tracking-wider text-gray-500">Monitoring</div>
      </div>
    </div>`,
    },
  },
  {
    title: "Mobile Applications",
    image: require("../assets/images/app-dev-vector.png"),
    shortDesc:
      "Native and Cross-platform mobile apps that dominate the App Store and Play Store.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    detailsPageImages: {
      first: require("../assets/images/services/appdevelopment1.jpg"),
      second: require("../assets/images/services/appdevelopment2.png"),
      third: require("../assets/images/services/appdevelopment3.png"),
    },
    html: {
      firstSection: `<h2 class="heading-2 mb-6">
      Mobile-First Experiences
    </h2>
    <p class="mb-6 text-lg text-gray-600 leading-relaxed">
     With billions of smartphone users worldwide, a mobile app is often your most direct channel to your customer.
     We craft intuitive, engaging, and high-performance mobile applications. Whether you need the raw power of Native development or the efficiency of Cross-Platform solutions, we deliver excellence.
    </p>
    
    <div class="flex flex-col md:flex-row gap-6 mt-8">
        <div class="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl">
            <h3 class="font-bold text-xl mb-3 text-gray-800">Cross-Platform (Flutter/React Native)</h3>
            <p class="text-gray-600 mb-4">One codebase, two platforms. Reduce time-to-market and development costs without sacrificing quality. Ideal for startups and most business apps.</p>
        </div>
         <div class="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl">
            <h3 class="font-bold text-xl mb-3 text-gray-800">Native (Swift/Kotlin)</h3>
            <p class="text-gray-600 mb-4">Unparalleled performance and access to deep hardware features. The choice for engaging games, AR experiences, and heavy computation apps.</p>
        </div>
    </div>`,
      secondSection: `<h2 class="heading-2 mb-6">
    The App Development Lifecycle
  </h2>
  <ul class="list-none space-y-4">
    <li class="p-4 bg-white shadow-sm rounded-lg flex items-center gap-4">
        <div class="text-2xl">🎨</div>
        <div>
            <h4 class="font-bold">UI/UX Design</h4>
            <p class="text-sm text-gray-500">Wireframing and high-fidelity prototypes that define the user journey.</p>
        </div>
    </li>
    <li class="p-4 bg-white shadow-sm rounded-lg flex items-center gap-4">
        <div class="text-2xl">💻</div>
        <div>
            <h4 class="font-bold">Agile Development</h4>
            <p class="text-sm text-gray-500">Iterative builds with regular client demos and feedback loops.</p>
        </div>
    </li>
    <li class="p-4 bg-white shadow-sm rounded-lg flex items-center gap-4">
        <div class="text-2xl">🐛</div>
        <div>
            <h4 class="font-bold">QA & Testing</h4>
            <p class="text-sm text-gray-500">Automated and manual testing on a farm of real devices.</p>
        </div>
    </li>
    <li class="p-4 bg-white shadow-sm rounded-lg flex items-center gap-4">
        <div class="text-2xl">🚀</div>
        <div>
            <h4 class="font-bold">App Store Launch</h4>
            <p class="text-sm text-gray-500">Handling submission guidelines, metadata, and approval processes.</p>
        </div>
    </li>
  </ul>
  `,
      thirdSection: `<h2 class="heading-2 mb-6">
    Why Go Mobile?
  </h2>
  <p class="mb-6 text-gray-600">The world is in your pocket. A dedicated mobile app increases customer retention and opens new revenue streams.</p>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 border rounded-xl text-center hover:shadow-md transition-shadow">
        <h4 class="font-bold text-3xl text-primary mb-2">3.5h</h4>
        <p class="text-sm text-gray-500">Average daily time spent on mobile apps.</p>
      </div>
      <div class="p-4 border rounded-xl text-center hover:shadow-md transition-shadow">
        <h4 class="font-bold text-3xl text-primary mb-2">3x</h4>
        <p class="text-sm text-gray-500">Higher conversion rates compared to mobile web.</p>
      </div>
      <div class="p-4 border rounded-xl text-center hover:shadow-md transition-shadow">
        <h4 class="font-bold text-3xl text-primary mb-2">90%</h4>
        <p class="text-sm text-gray-500">Of mobile time is spent in apps.</p>
      </div>
  </div>`,
    },
  },
  {
    title: "AI Calling Agency",
    image: require("../assets/images/ai-calling-vector.png"),
    shortDesc:
      "Revolutionize customer support and sales with hyper-realistic AI voice agents.",
    technologies: ["OpenAI Whisper", "Twilio", "Python", "ElevenLabs"],
    detailsPageImages: {
      first: require("../assets/images/services/ai calling-1.png"),
      second: require("../assets/images/services/ai calling-2.png"),
      third: require("../assets/images/services/ai calling-3.png"),
    },
    html: {
      firstSection: `<h2 class="heading-2 mb-6">
    The Future of Communication is AI
  </h2>
  <p class="mb-10 text-lg text-gray-600 leading-relaxed">
    Imagine an army of top-tier sales representatives or support agents available 24/7, 
    never tired, and infinitely scalable. That is what our AI Calling solutions deliver. 
    We build hyper-realistic voice AI agents that can handle inbound customer support, 
    outbound cold calling, appointment setting, and lead qualification with human-like empathy and latency.
  </p>
  
  <h2 class="text-2xl font-bold mb-4 text-gray-800">Use Cases:</h2>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="p-5 bg-primary/5 rounded-xl">
        <h3 class="font-bold text-gray-800 mb-2">📞 Inbound Support</h3>
        <p class="text-gray-600 text-sm">Instant answers to FAQs, order tracking, and issue resolution without wait times.</p>
    </div>
    <div class="p-5 bg-secondary/5 rounded-xl">
        <h3 class="font-bold text-gray-800 mb-2">📅 Appointment Setting</h3>
        <p class="text-gray-600 text-sm">Automated scheduling for dentists, realtors, and consultants. Syncs directly with your calendar.</p>
    </div>
    <div class="p-5 bg-accent/5 rounded-xl">
        <h3 class="font-bold text-gray-800 mb-2">📢 Lead Qualification</h3>
        <p class="text-gray-600 text-sm">filter out tire-kickers and pass only warm, qualified leads to your human sales team.</p>
    </div>
    <div class="p-5 bg-gray-50 rounded-xl">
        <h3 class="font-bold text-gray-800 mb-2">📋 Surveys & Feedback</h3>
        <p class="text-gray-600 text-sm">Conduct large-scale customer satisfaction surveys efficiently.</p>
    </div>
  </div>`,
      secondSection: `<h2 class="heading-2 mb-6">
    Human-Like Interaction
  </h2>
  <p class="mb-6 text-gray-600">Our AI agents aren't robotic IVR menus. They listen, understand context, handle interruptions, and speak with natural intonation.</p>
  <ul class="list-disc pl-6 mb-6 space-y-3">
    <li><strong class="text-gray-800">Sub-second Latency:</strong> Conversations flow naturally without awkward pauses.</li>
    <li><strong class="text-gray-800">Sentiment Analysis:</strong> The AI adapts its tone based on the customer's mood.</li>
    <li><strong class="text-gray-800">Custom Voices:</strong> Clone your best salesperson's voice or choose from our premium library.</li>
    <li><strong class="text-gray-800">CRM Integration:</strong> All calls are transcribed, summarized, and logged into your CRM automatically.</li>
  </ul>`,
      thirdSection: `<h2 class="heading-2 mb-6">
    ROI You Can Measure
  </h2>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between p-4 bg-white border rounded-lg">
        <span class="font-medium text-gray-600">Cost Reduction</span>
        <span class="font-bold text-green-600 text-xl">-70% vs Humans</span>
    </div>
    <div class="flex items-center justify-between p-4 bg-white border rounded-lg">
        <span class="font-medium text-gray-600">Availability</span>
        <span class="font-bold text-primary text-xl">24/7/365</span>
    </div>
    <div class="flex items-center justify-between p-4 bg-white border rounded-lg">
        <span class="font-medium text-gray-600">Scalability</span>
        <span class="font-bold text-primary/60 text-xl">Infinite</span>
    </div>
  </div>`,
    },
  },
  {
    title: "AI Automation",
    image: require("../assets/images/ai-automation-vector.png"),
    shortDesc:
      "Streamline operations and eliminate manual repetitive tasks with intelligent automation workflows.",
    technologies: ["Zapier", "Make.com", "Python", "LangChain", "n8n"],
    detailsPageImages: {
      first: require("../assets/images/services/ai automation-1.png"),
      second: require("../assets/images/services/ai automation-2.png"),
      third: require("../assets/images/services/ai automation-3.png"),
    },
    html: {
      firstSection: `<h2 class="heading-2 mb-6">
    Efficiency Through Intelligence
  </h2>
  <p class="mb-10 text-lg text-gray-600 leading-relaxed">
    Stop wasting thousands of hours on data entry, manual reporting, and copy-pasting between apps. 
    Our AI Automation services connect your disparate software tools into a cohesive, self-driving ecosystem. 
    We build intelligent agents that work whilst you sleep.
  </p>
  
  <h2 class="text-2xl font-bold mb-4 text-gray-800">What We Automate:</h2>
  <div class="space-y-4">
      <div class="flex gap-4">
        <div class="w-1 bg-primary rounded-full"></div>
        <div>
            <h4 class="font-bold text-lg">Marketing Operations</h4>
            <p class="text-gray-600">Auto-post to social media, generate content with LLMs, and nurture email leads based on behavior.</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="w-1 bg-secondary rounded-full"></div>
        <div>
            <h4 class="font-bold text-lg">Sales Pipelines</h4>
            <p class="text-gray-600">Enrich leads with external data, draft personalized outreach emails, and update deal stages.</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="w-1 bg-accent rounded-full"></div>
        <div>
            <h4 class="font-bold text-lg">Internal Operations</h4>
            <p class="text-gray-600">Automate invoicing, employee onboarding, and financial reporting.</p>
        </div>
      </div>
  </div>
  `,
      secondSection: `<h2 class="heading-2 mb-6">
    Our Automation Stack
  </h2>
  <p class="text-gray-600 mb-6">We use a blend of no-code, low-code, and custom code solutions to build robust workflows.</p>
  <div class="grid grid-cols-2 display-col gap-4">
      <div class="text-center p-4 bg-gray-50 rounded-lg">
        <span class="block font-bold text-xl mb-1">Make.com</span>
        <span class="text-xs text-gray-500">Complex Logic Workflows</span>
      </div>
      <div class="text-center p-4 bg-gray-50 rounded-lg">
        <span class="block font-bold text-xl mb-1">Zapier</span>
        <span class="text-xs text-gray-500">Universal Connectivity</span>
      </div>
      <div class="text-center p-4 bg-gray-50 rounded-lg">
        <span class="block font-bold text-xl mb-1">LangChain</span>
        <span class="text-xs text-gray-500">LLM Reasoning Agents</span>
      </div>
      <div class="text-center p-4 bg-gray-50 rounded-lg">
        <span class="block font-bold text-xl mb-1">Custom Python</span>
        <span class="text-xs text-gray-500">Advanced Data Processing</span>
      </div>
  </div>`,
      thirdSection: `<h2 class="heading-2 mb-6">
    The Automation Advantage
  </h2>
  <ul class="list-disc pl-6 mb-6">
    <li class="mb-3">
      <span class="font-semibold">Error Reduction:</span>
      Machines don't make typos or get tired. Ensure 100% accuracy in data handling.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Speed:</span>
      Processes that took days now happen in seconds.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Scalability:</span>
      Handle 10 leads or 10,000 leads with the same setup.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Cost Savings:</span>
      Dramatically reduce operational overhead and repurpose your team for creative work.
    </li>
  </ul>
  `,
    },
  },
];
