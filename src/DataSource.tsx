import { Briefcase, Cloud, Code, Cpu, DollarSign, Globe, Package, Palette, RefreshCcw, RotateCcw, Server, Gamepad, Settings, Shield, ShieldAlert, Smartphone, TrendingUp, UserCheck, UserPlus, Users, Zap } from "lucide-react";


const services = [
    {
      id: 1,
      icon: <Palette className="w-8 h-8" />,
      title: 'Designer',
      description: 'Creative UI/UX design services that transform your ideas into beautiful, intuitive interfaces optimized for user engagement and conversion.'
    },
    {
      id: 2,
      icon: <Globe className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Responsive and interactive web interfaces built with modern frameworks like React, Vue, and Angular for exceptional user experiences.'
    },
    {
      id: 3,
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Robust server-side applications, APIs, and database architectures that power your digital solutions with security and scalability.'
    },
    {
      id: 4,
      icon: <Cpu className="w-8 h-8" />,
      title: 'Software Development',
      description: 'Custom desktop applications and enterprise software solutions built with cutting-edge technologies to optimize your business processes.'
    },
    {
      id: 5,
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless experiences across all devices.'
    },
    {
      id: 6,
      icon: <Gamepad className="w-8 h-8" />,
      title: 'Game Development',
      description: 'Immersive 2D and 3D game experiences created with Unity or Unreal Engine for entertainment, education, or training purposes.'
    },
  ];
  
  const team = [
    {
      name: 'Andhika Khairul',
      role: '3D & Motion Designer',
      image: 'https://res.cloudinary.com/dueixuonp/image/upload/v1744012374/andhika_iobzve.jpg'
    },
    {
      name: 'Dzaki Rafif',
      role: 'Graphic & UI/UX Designer',
      image: 'https://res.cloudinary.com/dueixuonp/image/upload/v1744012375/apip_m4ebig.jpg'
    },
    {
      name: 'Ahmad Faqih',
      role: 'Full-Stack & Game Developer',
      image: 'https://res.cloudinary.com/dueixuonp/image/upload/v1744012373/faqih_vshfpb.jpg'
    },
    {
      name: 'Hendri',
      role: 'Full-Stack Developer',
      image: 'https://res.cloudinary.com/dueixuonp/image/upload/v1744012374/hendri_cgosgl.jpg'
    },
    {
      name: 'Abby Dahlan',
      role: 'Software Developer',
      image: 'https://res.cloudinary.com/dueixuonp/image/upload/v1744012374/abby_gjk582.jpg'
    },
    {
      name: 'Farrel Gifari',
      role: 'Software Developer',
      image: 'https://res.cloudinary.com/dueixuonp/image/upload/v1744012373/farrel_vm3bzu.jpg'
    },
    {
      name: 'Rizki Syahrul',
      role: 'Mobile App Developer',
      image: 'https://res.cloudinary.com/dueixuonp/image/upload/v1744012374/rizki_rnwxmd.jpg'
    },
    {
      name: 'Eijaz Ramadhan',
      role: 'Game Developer',
      image: 'https://res.cloudinary.com/dueixuonp/image/upload/v1744012373/eijaz_x7fg6e.jpg'
    
    },
  
  ];
  
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security First',
      description: 'All our solutions prioritize security, ensuring data protection and safe user interactions.'
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: 'Regular Updates',
      description: 'We continuously improve and update our projects to stay ahead of trends and technology.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency to deliver smooth and seamless user experiences.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Customizable Solutions',
      description: 'Tailored to meet specific business needs, ensuring the best fit for each project.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User-Centered Design',
      description: 'Designed with user experience in mind, making interactions intuitive and engaging.'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Integration',
      description: 'Seamless cloud connectivity for better scalability and accessibility across platforms.'
    }
  ];

  const serv = [
    {
      id: 1,
      icon: <Palette className="w-12 h-12" />,
      title: 'Designer',
      description: 'Create stunning visual experiences with our expert UI/UX design services tailored to your brand identity.',
      features: [
        'User Research & Persona Development',
        'Wireframing & Prototyping',
        'Brand Identity Design',
        'Interactive UI Elements',
        'Comprehensive Design Systems',
      ],
      benefits: [
        'Increase user engagement',
        'Improve conversion rates',
        'Strengthen brand recognition',
        'Enhance user satisfaction',
        'Reduce development iterations',
      ],
      pricing: [
        {
          name: 'Starter',
          price: '$49',
          features: ['3 Page Designs', 'Basic Wireframing', '1 Revision Round'],
        },
        {
          name: 'Professional',
          price: '$199',
          features: ['10 Page Designs', 'Interactive Prototypes', '3 Revision Rounds', 'Style Guide'],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Unlimited Pages', 'Complete Design System', 'Unlimited Revisions', 'Dedicated Designer'],
        },
      ],
    },
    {
      id: 2,
      icon: <Code className="w-12 h-12" />,
      title: 'Frontend Development',
      description: 'Build responsive, interactive user interfaces with modern frameworks that engage and convert visitors.',
      features: [
        'React/Vue/Angular Development',
        'Responsive Web Design',
        'Performance Optimization',
        'Cross-browser Compatibility',
        'Progressive Web App Support',
      ],
      benefits: [
        'Enhanced user experience',
        'Faster load times',
        'Better SEO ranking',
        'Increased mobile traffic',
        'Higher conversion rates',
      ],
      pricing: [
        {
          name: 'Basic',
          price: '$99',
          features: ['5-Page Website', 'Mobile Responsive', 'Basic SEO'],
        },
        {
          name: 'Professional',
          price: '$249',
          features: ['10-Page Website', 'Advanced Animations', 'Performance Optimization', 'CMS Integration'],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Custom Web Application', 'Advanced Features', 'API Integration', 'Dedicated Developer'],
        },
      ],
    },
    {
      id: 3,
      icon: <Server className="w-12 h-12" />,
      title: 'Backend Development',
      description: 'Develop powerful server-side applications with scalable architecture and robust database management.',
      features: [
        'API Development & Integration',
        'Database Architecture',
        'Server Configuration',
        'Authentication Systems',
        'Microservices Design',
      ],
      benefits: [
        'Scalable infrastructure',
        'Secure data management',
        'Fast application performance',
        'Reliable system uptime',
        'Streamlined operations',
      ],
      pricing: [
        {
          name: 'Starter',
          price: '$399',
          features: ['Basic API Setup', 'Single Database', 'Standard Authentication'],
        },
        {
          name: 'Professional',
          price: '$799',
          features: ['RESTful API Development', 'Multi-Database Support', 'OAuth Integration', 'Basic Scaling'],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Custom Architecture', 'High Availability Setup', 'Performance Optimization', 'Dedicated DevOps'],
        },
      ],
    },
    {
      id: 4,
      icon: <Cpu className="w-12 h-12" />,
      title: 'Software Development',
      description: 'Create custom desktop applications and enterprise solutions to streamline your business processes.',
      features: [
        'Custom Software Solutions',
        'Enterprise Applications',
        'Legacy System Integration',
        'Process Automation',
        'Quality Assurance Testing',
      ],
      benefits: [
        'Increased efficiency',
        'Reduced operational costs',
        'Improved data accuracy',
        'Better decision making',
        'Competitive advantage',
      ],
      pricing: [
        {
          name: 'Basic',
          price: '$149',
          features: ['Single Platform Support', 'Basic Functionality', 'Standard Updates'],
        },
        {
          name: 'Professional',
          price: '$499',
          features: ['Multi-platform Support', 'Advanced Features', 'Priority Support', 'Regular Updates'],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Custom Solutions', 'Full Integration Services', 'Dedicated Development Team', 'Extended Support'],
        },
      ],
    },
    {
      id: 5,
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Development',
      description: 'Develop feature-rich mobile applications for iOS and Android that provide seamless user experiences.',
      features: [
        'Native iOS & Android Development',
        'Cross-platform Solutions',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Push Notification Systems',
      ],
      benefits: [
        'Increased customer engagement',
        'Expanded market reach',
        'Brand strengthening',
        'New revenue channels',
        'Enhanced customer service',
      ],
      pricing: [
        {
          name: 'Basic',
          price: '$199',
          features: ['Single Platform (iOS or Android)', 'Core Features', '3 Months Support'],
        },
        {
          name: 'Professional',
          price: '$599',
          features: ['Both Platforms (iOS & Android)', 'Advanced Features', '6 Months Support', 'Analytics Integration'],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Custom App Development', 'Advanced Integrations', 'Lifetime Support', 'White Label Solution'],
        },
      ],
    },
    {
      id: 6,
      icon: <Gamepad className="w-12 h-12" />,
      title: 'Game Development',
      description: 'Build immersive gaming experiences with cutting-edge technology for entertainment or educational purposes.',
      features: [
        '2D/3D Game Development',
        'Unity/Unreal Engine Expertise',
        'Game Design & Animation',
        'Multiplayer Support',
        'Cross-platform Compatibility',
      ],
      benefits: [
        'Engaging user experiences',
        'Innovative gameplay mechanics',
        'Effective learning tools',
        'Brand awareness through gamification',
        'New revenue streams',
      ],
      pricing: [
        {
          name: 'Indie',
          price: '$599',
          features: ['2D Game Development', 'Basic Mechanics', 'Single Platform'],
        },
        {
          name: 'Professional',
          price: '$999',
          features: ['2D/3D Development', 'Advanced Mechanics', 'Two Platforms', 'Basic Multiplayer'],
        },
        {
          name: 'AAA',
          price: 'Custom',
          features: ['Full 3D Development', 'Complex Game Systems', 'Multiple Platforms', 'Advanced Multiplayer'],
        },
      ],
    },
  ];


  const stats = [
    { title: "Total Sales", value: "$7,563", icon: <DollarSign className="w-6 h-6" />, change: "+12.5%" },
    { title: "Completed Projects", value: "986", icon: <ShieldAlert className="w-6 h-6" />, change: "-2.4%" },
    { title: "Total Client ", value: "689", icon: <Server className="w-6 h-6" />, change: "+8.1%" },
    { title: "Refund Requests", value: "12", icon: <RotateCcw className="w-6 h-6" />, change: "-1.8%" },
  ];

  const salesData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 75 },
    { month: 'Mar', value: 85 },
    { month: 'Apr', value: 80 },
    { month: 'May', value: 90 },
    { month: 'Jun', value: 95 },
  ];

  const teamStatus = [
    { name: "Andhika Khairul", role: "3D & Motion Designer", status: "Active", tasks: 10 },
    { name: "Dzaki Rafif", role: "Graphic & UI/UX Designer", status: "In Meeting", tasks: 7 },
    { name: "Ahmad Faqih", role: "Full-Stack & Game Developer", status: "Working", tasks: 12 },
    { name: "Hendri", role: "Full-Stack Developer", status: "Active", tasks: 15 },
    { name: "Abby Dahlan", role: "Software Developer", status: "Working", tasks: 9 },
    { name: "Farrel Gifari", role: "Software Developer", status: "In Meeting", tasks: 6 },
    { name: "Rizki Syahrul", role: "Mobile App Developer", status: "Away", tasks: 4 },
    { name: "Eijaz Ramadhan", role: "Game Developer", status: "Active", tasks: 8 },
  ];

  const recentSales = [
    { id: 1, client: "John Doe", package: "Personal Website", amount: "$200", date: "2 weeks ago" },
    { id: 2, client: "Tech Innovators", package: "Frontend Development", amount: "$599", date: "1 month ago" },
    { id: 3, client: "Emily Roberts", package: "Portfolio Website", amount: "$150", date: "2 months ago" },
    { id: 4, client: "DataSoft Inc", package: "Backend Development", amount: "$200", date: "2 months ago" },
    { id: 5, client: "CloudWare Ltd", package: "Software Development", amount: "$400", date: "2 months ago" },
    { id: 6, client: "Michael Johnson", package: "E-commerce Store", amount: "$500", date: "4 months ago" },
    { id: 7, client: "App Masters", package: "Mobile Development", amount: "$450", date: "6 months ago" },
    { id: 8, client: "Samantha Lee", package: "UI/UX Design", amount: "$300", date: "6 months ago" },
    { id: 9, client: "GameForge Studio", package: "Game Development", amount: "$999", date: "1 year ago" },
  ];

  const projectMetrics = [
    { title: "Completed Projects", value: "145", icon: <Package className="w-6 h-6" /> },
    { title: "Team Performance", value: "94%", icon: <UserCheck className="w-6 h-6" /> },
    { title: "Monthly Growth", value: "+15%", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Active Clients", value: "28", icon: <Users className="w-6 h-6" /> },
    { title: "Ongoing Projects", value: "12", icon: <Briefcase className="w-6 h-6" /> },
    { title: "New Leads", value: "32", icon: <UserPlus className="w-6 h-6" /> },
  ];

  export { serv, projectMetrics, recentSales, team, teamStatus, salesData, stats, features, services};
  