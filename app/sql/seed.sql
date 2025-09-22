-- Seed data for hadAgoodDay database
-- Using profile_id: e0143721-d889-49cb-9bfa-1872e853a7c0 for all profile references

-- ==============================================
-- CATEGORIES (5 rows)
-- ==============================================
INSERT INTO categories (name, description) VALUES
('Productivity', 'Tools and apps that help you get things done efficiently'),
('Developer Tools', 'Software and platforms for developers and engineers'),
('Design', 'Creative tools and resources for designers'),
('Marketing', 'Tools for marketing, analytics, and growth'),
('AI & Machine Learning', 'Artificial intelligence and machine learning platforms');

-- ==============================================
-- TOPICS (5 rows)
-- ==============================================
INSERT INTO topics (name, slug) VALUES
('Product Development', 'product-development'),
('Startup Advice', 'startup-advice'),
('Tech News', 'tech-news'),
('Career Growth', 'career-growth'),
('Industry Insights', 'industry-insights');

-- ==============================================
-- JOBS (5 rows)
-- ==============================================
INSERT INTO jobs (position, overview, responsibilities, qualifications, benefits, skills, company_name, company_logo, company_location, apply_url, job_type, location_type, salary_range) VALUES
('Senior Frontend Developer', 'Join our team to build amazing user experiences', 'Develop React applications, collaborate with designers, optimize performance', '5+ years React experience, TypeScript, CSS expertise', 'Health insurance, remote work, equity', 'React, TypeScript, CSS, Git', 'TechCorp', 'https://example.com/logo1.png', 'San Francisco, CA', 'https://example.com/apply1', 'full-time', 'hybrid', '$120,000 - $150,000'),
('Product Manager', 'Lead product strategy and development', 'Define requirements, work with engineering, analyze metrics', '3+ years PM experience, technical background', 'Competitive salary, flexible hours', 'Product Management, Analytics, Communication', 'StartupXYZ', 'https://example.com/logo2.png', 'New York, NY', 'https://example.com/apply2', 'full-time', 'remote', '$100,000 - $120,000'),
('UX Designer', 'Create intuitive and beautiful user interfaces', 'Design wireframes, conduct user research, create prototypes', 'Portfolio required, Figma expertise', 'Design budget, learning opportunities', 'Figma, User Research, Prototyping', 'DesignStudio', 'https://example.com/logo3.png', 'Austin, TX', 'https://example.com/apply3', 'full-time', 'in-person', '$70,000 - $100,000'),
('DevOps Engineer', 'Build and maintain our cloud infrastructure', 'Manage AWS services, automate deployments, monitor systems', 'AWS certification, Docker, Kubernetes', 'Learning budget, conference attendance', 'AWS, Docker, Kubernetes, Terraform', 'CloudTech', 'https://example.com/logo4.png', 'Seattle, WA', 'https://example.com/apply4', 'full-time', 'hybrid', '$150,000 - $250,000'),
('Marketing Specialist', 'Drive growth through creative marketing campaigns', 'Create content, manage social media, analyze campaigns', 'Marketing degree, social media experience', 'Performance bonuses, creative freedom', 'Social Media, Analytics, Content Creation', 'GrowthCo', 'https://example.com/logo5.png', 'Los Angeles, CA', 'https://example.com/apply5', 'part-time', 'remote', '$50,000 - $70,000');

-- ==============================================
-- PRODUCTS (5 rows)
-- ==============================================
INSERT INTO products (name, description, url, tagline, how_it_works, icon, profile_id, category_id) VALUES
('TaskMaster Pro', 'The ultimate productivity app for teams and individuals', 'https://taskmaster.com', 'Get more done, stress less', 'Organize tasks, set deadlines, track progress with our intuitive interface', '📋', 'e0143721-d889-49cb-9bfa-1872e853a7c0', 1),
('CodeFlow', 'Streamline your development workflow with intelligent code management', 'https://codeflow.dev', 'Code smarter, not harder', 'Automate code reviews, track changes, and collaborate seamlessly', '💻', 'e0143721-d889-49cb-9bfa-1872e853a7c0', 2),
('DesignHub', 'All-in-one design platform for modern creators', 'https://designhub.io', 'Where creativity meets productivity', 'Create, collaborate, and share designs with our comprehensive toolkit', '🎨', 'e0143721-d889-49cb-9bfa-1872e853a7c0', 3),
('GrowthAnalytics', 'Data-driven marketing insights for growing businesses', 'https://growthanalytics.com', 'Turn data into growth', 'Track campaigns, analyze performance, and optimize your marketing strategy', '📊', 'e0143721-d889-49cb-9bfa-1872e853a7c0', 4),
('AI Assistant Pro', 'Intelligent automation for your daily tasks', 'https://aiassistant.pro', 'Your AI-powered productivity partner', 'Automate repetitive tasks, generate content, and boost your efficiency', '🤖', 'e0143721-d889-49cb-9bfa-1872e853a7c0', 5);

-- ==============================================
-- REVIEWS (5 rows)
-- ==============================================
INSERT INTO reviews (product_id, profile_id, rating, review) VALUES
(1, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 5, 'TaskMaster Pro has completely transformed how our team manages projects. The interface is intuitive and the collaboration features are fantastic.'),
(2, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 4, 'CodeFlow makes code reviews so much easier. The automated suggestions save us hours every week.'),
(3, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 5, 'DesignHub is a game-changer for our design team. The collaboration features are outstanding.'),
(4, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 4, 'GrowthAnalytics provides excellent insights into our marketing performance. Highly recommended.'),
(5, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 5, 'AI Assistant Pro has automated so many of our routine tasks. The AI is surprisingly accurate and helpful.');

-- ==============================================
-- POSTS (5 rows)
-- ==============================================
INSERT INTO posts (title, content, topic_id, profile_id) VALUES
('10 Tips for Building Better Products', 'Building great products requires a combination of user research, iterative development, and continuous feedback. Here are my top 10 tips...', 1, 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('The Future of Remote Work', 'Remote work is here to stay, but what does the future hold? Let me share some insights from leading companies...', 2, 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('Latest Tech Trends in 2024', 'From AI to Web3, here are the technology trends that are shaping our industry this year...', 3, 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('Career Growth Strategies', 'How to advance your career in tech: practical advice from someone who has been there...', 4, 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('Industry Insights: What We Learned', 'Key takeaways from industry conferences and conversations with thought leaders...', 5, 'e0143721-d889-49cb-9bfa-1872e853a7c0');

-- ==============================================
-- POST REPLIES (5 rows)
-- ==============================================
INSERT INTO post_replies (post_id, profile_id, reply) VALUES
(1, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'Great tips! I especially agree with the user research point. It is crucial to understand your users needs.'),
(2, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'Remote work has definitely changed how we collaborate. The tools we use now are so much better than before.'),
(3, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'AI is definitely the biggest trend right now. Every company seems to be integrating AI into their products.'),
(4, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'Career growth in tech requires continuous learning. The industry moves so fast that you have to keep up.'),
(5, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'Industry insights are so valuable. Thanks for sharing these learnings with the community.');

-- ==============================================
-- GPT IDEAS (5 rows)
-- ==============================================
INSERT INTO gpt_ideas (idea, views, claimed_by) VALUES
('AI-powered code review tool that learns from your coding patterns', 150, 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('Social media scheduler that optimizes posting times based on audience engagement', 89, 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('Virtual reality meeting platform for remote teams', 203, 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('Blockchain-based freelance payment system', 67, 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('AI personal assistant that manages your entire digital life', 312, 'e0143721-d889-49cb-9bfa-1872e853a7c0');

-- ==============================================
-- TEAMS (5 rows)
-- ==============================================
INSERT INTO teams (product_name, team_size, equity_split, product_stage, roles, product_description, team_leader_id) VALUES
('EcoTracker', 4, 25, 'mvp', 'Frontend Developer, Backend Developer, Designer, Product Manager', 'An app that helps users track their carbon footprint and suggests eco-friendly alternatives', 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('HealthConnect', 6, 20, 'prototype', 'Full-stack Developer, Mobile Developer, UX Designer, Data Scientist, Marketing Lead, CEO', 'Platform connecting patients with healthcare providers for virtual consultations', 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('EduTech Pro', 3, 33, 'idea', 'Lead Developer, Designer, Content Creator', 'Interactive learning platform for coding bootcamps with AI-powered personalized curriculum)','e0143721-d889-49cb-9bfa-1872e853a7c0'),
('FinanceFlow', 5, 20, 'product', 'Backend Developer, Frontend Developer, DevOps Engineer, Financial Analyst, Product Manager', 'Personal finance management tool with automated budgeting and investment recommendations', 'e0143721-d889-49cb-9bfa-1872e853a7c0'),
('SocialSync', 7, 15, 'mvp', 'Mobile Developer, Backend Developer, Frontend Developer, Designer, Marketing Specialist, Community Manager, CEO', 'Social media management platform for small businesses with AI content generation', 'e0143721-d889-49cb-9bfa-1872e853a7c0');

-- ==============================================
-- MESSAGE ROOMS (5 rows)
-- ==============================================
INSERT INTO message_rooms DEFAULT VALUES;
INSERT INTO message_rooms DEFAULT VALUES;
INSERT INTO message_rooms DEFAULT VALUES;
INSERT INTO message_rooms DEFAULT VALUES;
INSERT INTO message_rooms DEFAULT VALUES;

-- ==============================================
-- MESSAGES (5 rows)
-- ==============================================
INSERT INTO messages (message_room_id, sender_id, content) VALUES
(1, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'Hey team! How is the project coming along?'),
(2, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'I have some ideas for the new feature we discussed.'),
(3, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'The design mockups look great! When can we start development?'),
(4, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'Thanks for the feedback on the proposal. I will incorporate those changes.'),
(5, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'Looking forward to our meeting tomorrow to discuss the roadmap.');

-- ==============================================
-- NOTIFICATIONS (5 rows)
-- ==============================================
INSERT INTO notifications (source_id, product_id, post_id, target_id, type) VALUES
('e0143721-d889-49cb-9bfa-1872e853a7c0', 1, NULL, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'review'),
('e0143721-d889-49cb-9bfa-1872e853a7c0', NULL, 1, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'reply'),
('e0143721-d889-49cb-9bfa-1872e853a7c0', NULL, NULL, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'follow'),
('e0143721-d889-49cb-9bfa-1872e853a7c0', 2, NULL, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'review'),
('e0143721-d889-49cb-9bfa-1872e853a7c0', NULL, 2, 'e0143721-d889-49cb-9bfa-1872e853a7c0', 'mention');

-- ==============================================
-- COMPOSITE PRIMARY KEY TABLES (1 row each)
-- ==============================================

-- PRODUCT UPVOTES (composite PK: product_id, profile_id)
INSERT INTO product_upvotes (product_id, profile_id) VALUES
(1, 'e0143721-d889-49cb-9bfa-1872e853a7c0');

-- POST UPVOTES (composite PK: post_id, profile_id)
INSERT INTO post_upvotes (post_id, profile_id) VALUES
(1, 'e0143721-d889-49cb-9bfa-1872e853a7c0');

-- GPT IDEAS LIKES (composite PK: gpt_idea_id, profile_id)
INSERT INTO gpt_ideas_likes (gpt_idea_id, profile_id) VALUES
(1, 'e0143721-d889-49cb-9bfa-1872e853a7c0');

-- MESSAGE ROOM MEMBERS (composite PK: message_room_id, profile_id)
INSERT INTO message_room_members (message_room_id, profile_id) VALUES
(1, 'e0143721-d889-49cb-9bfa-1872e853a7c0');

-- FOLLOWS (composite PK: follower_id, following_id)
INSERT INTO follows (follower_id, following_id) VALUES
('e0143721-d889-49cb-9bfa-1872e853a7c0', 'e0143721-d889-49cb-9bfa-1872e853a7c0');

-- ==============================================
-- SUMMARY
-- ==============================================
-- Tables seeded:
-- - categories: 5 rows
-- - topics: 5 rows  
-- - jobs: 5 rows
-- - products: 5 rows
-- - reviews: 5 rows
-- - posts: 5 rows
-- - post_replies: 5 rows
-- - gpt_ideas: 5 rows
-- - team: 5 rows
-- - message_rooms: 5 rows
-- - messages: 5 rows
-- - notifications: 5 rows
-- - product_upvotes: 1 row (composite PK)
-- - post_upvotes: 1 row (composite PK)
-- - gpt_ideas_likes: 1 row (composite PK)
-- - message_room_members: 1 row (composite PK)
-- - follows: 1 row (composite PK)
-- 
-- All profile_id references use: e0143721-d889-49cb-9bfa-1872e853a7c0
-- Composite primary keys are properly handled
-- Foreign key relationships are maintained
