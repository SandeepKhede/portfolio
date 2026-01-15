export default function Projects() {
    const projects = [
        {
            title: "LLM-Powered Chatbot Platform",
            desc: "Production-ready AI chatbot using large language models with controlled context windows, prompt orchestration, and retrieval-augmented generation (RAG) for accurate domain-specific answers.",
            tags: [
                "LLMs",
                "LangChain",
                "RAG",
                "OpenAI API",
                "Vector Databases",
                "Prompt Engineering"
            ]
        },
        {
            title: "AI Sector Analysis & Insight Engine",
            desc: "AI-driven application for sector-wise analysis using document ingestion, embeddings, and semantic search to generate structured insights from large volumes of unstructured data.",
            tags: [
                "LangChain",
                "Embeddings",
                "Vector Search",
                "RAG Pipelines",
                "OpenAI API",
                "Data Analysis"
            ]
        },
        {
            title: "Conversational AI Workflow Automation",
            desc: "LLM-based automation system combining conversational interfaces with backend workflows to trigger analysis, data retrieval, and task execution through structured prompts.",
            tags: [
                "LLM Agents",
                "LangChain",
                "Prompt Chaining",
                "Function Calling",
                "Node.js"
            ]
        },
        {
            title: "Identity & Access Management Platform (OKTA)",
            desc: "Secure full-stack platform with REST APIs, JWT-based authentication, OKTA identity integration, and feature-flagged deployments in a microservices environment.",
            tags: [
                "React",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
                "OKTA",
                "Microservices"
            ]
        },
        {
            title: "Enterprise Analytics Dashboard (GDIT)",
            desc: "Role-based analytics dashboard visualizing AWS QuickSight data with OAuth authentication, scalable APIs, and cloud-native backend integrations.",
            tags: [
                "React",
                "AWS QuickSight",
                "OKTA OAuth",
                "Express",
                "PostgreSQL",
                "AWS RDS"
            ]
        },
        {
            title: "Cloud-Native Workflow & Monitoring System",
            desc: "Event-driven backend system using AWS Lambda and Step Functions to orchestrate asynchronous workflows, data sync jobs, and infrastructure monitoring.",
            tags: [
                "AWS Lambda",
                "Step Functions",
                "CloudWatch",
                "Docker",
                "Jenkins",
                "AWS S3",
                "Node.js"
            ]
        }
    ];

    return (
        <section className="min-h-screen bg-[#121212] py-24 px-6 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-white mb-16 tracking-tight">Select Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="h-48 bg-gradient-to-br from-white/10 to-transparent rounded-2xl mb-6 group-hover:scale-[1.02] transition-transform duration-500" />

                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-white/60 mb-6">{project.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
