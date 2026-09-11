export type ProjectCategory = 'ml' | 'game';
export type ProjectFilter = 'all' | ProjectCategory;
export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  githubUrl: string;
  summary: string;
  items: { label: string; text: string }[];
  tags: string[];
  highlight: { value: string; label: string };
}
export const projects: Project[] = [
  {
    id: 'credit-card-fraud', shortTitle: 'Finding the signal in fraud.',
    title: 'Credit Card Fraud Detection with Hybrid Imbalance Handling',
    category: 'ml', categoryLabel: 'Imbalanced classification',
    githubUrl: 'https://github.com/mkhairs/Credit-Card-Fraud-Detection-with-Hybrid-Imbalance-Handling',
    summary: 'A leakage-safe XGBoost pipeline that identifies rare fraudulent transactions through feature selection and hybrid imbalance handling.',
    items: [
      { label: 'Model Development', text: 'Developed an XGBoost-based credit card fraud detection model for a highly imbalanced dataset containing approximately 0.17% fraudulent transactions.' },
      { label: 'Imbalance Handling', text: 'Implemented a leakage-safe pipeline combining Mutual Information feature selection, IQR-based outlier capping, Random Undersampling, SMOTE, and cost-sensitive XGBoost with class weighting.' },
      { label: 'Evaluation', text: 'Applied stratified 5-fold cross-validation and achieved 84.44% precision, 80.00% recall, 82.16% F1-score, and 80.91% PR-AUC on the untouched test set.' },
    ],
    tags: ['Python', 'XGBoost', 'SMOTE', 'Imbalanced Learning', 'Feature Selection', 'PR-AUC'],
    highlight: { value: '82.16%', label: 'Test F1-score' },
  },
  {
    id: 'ihsg-forecasting', shortTitle: 'Looking five trading days ahead.',
    title: 'Direct Multi-Horizon IHSG Forecasting', category: 'ml', categoryLabel: 'Time-series forecasting',
    githubUrl: 'https://github.com/mkhairs/IHSG-GRU-Prediction',
    summary: 'A Gated Temporal GRU that combines price history and technical indicators to forecast the IHSG across five horizons.',
    items: [
      { label: 'Model Development', text: 'Developed a direct multi-horizon Gated Temporal GRU to forecast IHSG closing prices for the next five trading days simultaneously using a 20-day historical look-back window.' },
      { label: 'Architecture', text: 'Designed a single-layer GRU for sequential closing prices with an auxiliary SMA/EMA branch using SMA₂₀, SMA₄₀, EMA₂₀, and EMA₄₀, combined through a learnable sigmoid gate for adaptive feature fusion.' },
      { label: 'Evaluation', text: 'Implemented a leakage-safe chronological train/validation/test split and achieved a test MAE of 100.08, RMSE of 147.97, and MAPE of 1.396%, with a one-day-ahead MAPE of 0.808%.' },
    ],
    tags: ['Python', 'PyTorch', 'GRU', 'Time Series', 'Feature Fusion', 'IHSG'],
    highlight: { value: '1.396%', label: 'Test MAPE' },
  },
  {
    id: 'resume-screening', shortTitle: 'Comparing models for selection.',
    title: 'Resume Screening and Candidate Selection Prediction', category: 'ml', categoryLabel: 'Model benchmarking',
    githubUrl: 'https://github.com/mkhairs/Resume-Screening-and-Candidate-Selection-Prediction',
    summary: 'XGBoost and a custom Residual Neural Network, benchmarked for candidate-selection prediction using resume-related features.',
    items: [
      { label: 'Model Development', text: 'Developed and compared XGBoost and a custom Residual Neural Network for binary candidate-selection prediction using resume-related features.' },
      { label: 'Architecture & Training', text: 'Implemented dynamic feature-wise gating, residual connections, DropPath, AdamW, class-weighted BCE loss, Early Stopping, and ReduceLROnPlateau.' },
      { label: 'Evaluation', text: 'Applied leakage-safe stratified 5-fold cross-validation, learnable threshold optimization with Soft-F1, and evaluation using Accuracy, Precision, Recall, F1-Score, and ROC-AUC.' },
    ],
    tags: ['Python', 'PyTorch', 'XGBoost', 'Deep Learning', 'NLP', 'Residual NN'],
    highlight: { value: '5-fold', label: 'Stratified cross-validation' },
  },
  {
    id: 'alien-space-invader', shortTitle: 'A little space to play.',
    title: 'Alien Space Invader', category: 'game', categoryLabel: 'Game development',
    githubUrl: 'https://github.com/mkhairs/alien-space-invader',
    summary: 'A classic arcade shooter built in Python, bringing object-oriented design to ships, aliens, projectiles, and collision detection.',
    items: [
      { label: 'Development', text: 'Developed a classic 2D shooter game using Python and Object-Oriented Programming to manage game entities such as the player ship, aliens, and projectiles.' },
      { label: 'Mechanics', text: 'Implemented collision detection, dynamic enemy movement, score tracking, projectile handling, and keyboard-based player controls.' },
    ],
    tags: ['Python', 'Pygame', 'OOP', 'Collision Detection', 'Game Dev'],
    highlight: { value: 'Python', label: 'Pygame · Object-oriented design' },
  },
];
export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All Projects' }, { id: 'ml', label: 'Machine Learning' }, { id: 'game', label: 'Game Dev' },
];
export function filterProjects(filter: ProjectFilter) { return projects.filter(project => filter === 'all' || project.category === filter); }
