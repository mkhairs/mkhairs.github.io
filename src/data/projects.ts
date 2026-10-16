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
    id: 'pinn-lorenz',
    shortTitle: 'Solving chaos with physics-informed AI.',
    title: 'Inverse Fourier-Feature PINN for the Lorenz System',
    category: 'ml',
    categoryLabel: 'Inverse modeling · Deep learning',
    githubUrl: 'https://github.com/mkhairs/Inverse-Fourier-Feature-PINN-for-Lorenz',
    summary: 'An inverse Physics-Informed Neural Network (PINN) reconstructing 3D chaotic trajectories and estimating governing parameters from noisy observations.',
    items: [
      {
        label: 'System Identification',
        text: 'Built an inverse PINN for a 3-dimensional chaotic system governed by 3 coupled ODEs, jointly reconstructing (x, y, z) and estimating 3 physical parameters (σ, ρ, β).',
      },
      {
        label: 'Dataset Generation',
        text: 'Generated 1,000 time samples over a 50-unit simulation horizon (t = 0–50), using numerical ODE integration; configured a 50/50 split corresponding to 500 training and 500 remaining samples.',
      },
      {
        label: 'Benchmark Configuration',
        text: 'Modeled Lorenz dynamics with reference parameters σ = 10, ρ = 28, and β = 8/3 ≈ 2.667; introduced noise into observed training data to evaluate parameter recovery under imperfect observations.',
      },
      {
        label: 'Fourier Architecture',
        text: 'Encoded the 1D time input using sinusoidal Fourier features and combined gated residual blocks with 1 trainable global skip connection to predict 3 time-dependent state variables.',
      },
      {
        label: 'Physics-Constrained Optimization',
        text: 'Combined 3 objectives—data-fitting loss, physics-residual loss, and initial-condition loss—and trained through 2 sequential optimizers, AdamW and L-BFGS, for joint trajectory reconstruction and estimation of 3 unknown parameters.',
      },
    ],
    tags: ['Python', 'PyTorch', 'PINNs', 'Fourier Features', 'SciPy', 'Dynamical Systems'],
    highlight: { value: 'AdamW + L-BFGS', label: 'Sequential physics-loss optimization' },
  },
  {
    id: 'ihsg-tda-kmeans',
    shortTitle: 'Market regimes through geometry & topology.',
    title: 'IHSG Market Regimes: Financial vs. Topological K-Means',
    category: 'ml',
    categoryLabel: 'Topological data analysis · ML',
    githubUrl: 'https://github.com/mkhairs/IHSG-Market-Regimes-Financial-vs.-Topological-K-Means',
    summary: 'A comparative market regime framework contrasting classical technical indicators with topological persistent homology on the Indonesian stock exchange.',
    items: [
      {
        label: 'Feature Engineering',
        text: 'Engineered 75 financial and topological features using 3 rolling windows (20, 40, and 60 trading days) to characterize IHSG market dynamics.',
      },
      {
        label: 'Topological Analysis',
        text: 'Applied time-delay embedding (m = 3, τ = 1) and persistent homology (H₀, H₁) to extract topological patterns from IHSG returns.',
      },
      {
        label: 'Regime Evaluation',
        text: 'Compared financial and TDA-based K-Means models using 5 random seeds, silhouette score, Davies-Bouldin index, and Adjusted Rand Index to assess clustering quality and stability.',
      },
    ],
    tags: ['Python', 'Scikit-Learn', 'Topological Data Analysis', 'Persistent Homology', 'Time Series', 'K-Means'],
    highlight: { value: '75 Features', label: 'Financial & TDA indicators' },
  },
  {
    id: 'credit-card-fraud',
    shortTitle: 'Finding the signal in fraud.',
    title: 'Credit Card Fraud Detection with Hybrid Imbalance Handling',
    category: 'ml',
    categoryLabel: 'Imbalanced classification',
    githubUrl: 'https://github.com/mkhairs/Credit-Card-Fraud-Detection-with-Hybrid-Imbalance-Handling',
    summary: 'A leakage-safe XGBoost pipeline that identifies rare fraudulent transactions through feature selection and hybrid imbalance handling.',
    items: [
      {
        label: 'Model Development',
        text: 'Developed an XGBoost-based credit card fraud detection model for a highly imbalanced dataset containing approximately 0.17% fraudulent transactions.',
      },
      {
        label: 'Imbalance Handling',
        text: 'Implemented a leakage-safe pipeline combining Mutual Information feature selection, IQR-based outlier capping, Random Undersampling, SMOTE, and cost-sensitive XGBoost with class weighting.',
      },
      {
        label: 'Evaluation',
        text: 'Applied stratified 5-fold cross-validation and achieved 84.44% precision, 80.00% recall, 82.16% F1-score, and 80.91% PR-AUC on the untouched test set.',
      },
    ],
    tags: ['Python', 'XGBoost', 'SMOTE', 'Imbalanced Learning', 'Feature Selection', 'PR-AUC'],
    highlight: { value: '82.16%', label: 'Test F1-score' },
  },
  {
    id: 'ihsg-forecasting',
    shortTitle: 'Looking five trading days ahead.',
    title: 'Direct Multi-Horizon IHSG Forecasting',
    category: 'ml',
    categoryLabel: 'Time-series forecasting',
    githubUrl: 'https://github.com/mkhairs/IHSG-GRU-Prediction',
    summary: 'A Gated Temporal GRU that combines price history and technical indicators to forecast the IHSG across five horizons.',
    items: [
      {
        label: 'Model Development',
        text: 'Developed a direct multi-horizon Gated Temporal GRU to forecast IHSG closing prices for the next five trading days simultaneously using a 20-day historical look-back window.',
      },
      {
        label: 'Architecture',
        text: 'Designed a single-layer GRU for sequential closing prices with an auxiliary SMA/EMA branch using SMA₂₀, SMA₄₀, EMA₂₀, and EMA₄₀, combined through a learnable sigmoid gate for adaptive feature fusion.',
      },
      {
        label: 'Evaluation',
        text: 'Implemented a leakage-safe chronological train/validation/test split and achieved a test MAE of 100.08, RMSE of 147.97, and MAPE of 1.396%, with a one-day-ahead MAPE of 0.808%.',
      },
    ],
    tags: ['Python', 'PyTorch', 'GRU', 'Time Series', 'Feature Fusion', 'IHSG'],
    highlight: { value: '1.396%', label: 'Test MAPE' },
  },
  {
    id: 'resume-screening',
    shortTitle: 'Comparing models for selection.',
    title: 'Resume Screening and Candidate Selection Prediction',
    category: 'ml',
    categoryLabel: 'Model benchmarking',
    githubUrl: 'https://github.com/mkhairs/Resume-Screening-and-Candidate-Selection-Prediction',
    summary: 'XGBoost and a custom Residual Neural Network, benchmarked for candidate-selection prediction using resume-related features.',
    items: [
      {
        label: 'Model Development',
        text: 'Developed and compared XGBoost and a custom Residual Neural Network for binary candidate-selection prediction using resume-related features.',
      },
      {
        label: 'Architecture & Training',
        text: 'Implemented dynamic feature-wise gating, residual connections, DropPath, AdamW, class-weighted BCE loss, Early Stopping, and ReduceLROnPlateau.',
      },
      {
        label: 'Evaluation',
        text: 'Applied leakage-safe stratified 5-fold cross-validation, learnable threshold optimization with Soft-F1, and evaluation using Accuracy, Precision, Recall, F1-Score, and ROC-AUC.',
      },
    ],
    tags: ['Python', 'PyTorch', 'XGBoost', 'Deep Learning', 'Soft-F1', 'Residual NN'],
    highlight: { value: '5-fold', label: 'Stratified cross-validation' },
  },
  {
    id: 'alien-space-invader',
    shortTitle: 'A little space to play.',
    title: 'Alien Space Invader',
    category: 'game',
    categoryLabel: 'Game development',
    githubUrl: 'https://github.com/mkhairs/alien-space-invader',
    summary: 'A classic arcade shooter built in Python, bringing object-oriented design to ships, aliens, projectiles, and collision detection.',
    items: [
      {
        label: 'Development',
        text: 'Developed a classic 2D shooter game using Python and Object-Oriented Programming to manage game entities such as the player ship, aliens, and projectiles.',
      },
      {
        label: 'Mechanics',
        text: 'Implemented collision detection, dynamic enemy movement, score tracking, projectile handling, and keyboard-based player controls.',
      },
    ],
    tags: ['Python', 'Pygame', 'OOP', 'Collision Detection', 'Game Dev'],
    highlight: { value: 'Python', label: 'Pygame · Object-oriented design' },
  },
];

export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'game', label: 'Game Dev' },
];

export function filterProjects(filter: ProjectFilter) {
  return projects.filter(project => filter === 'all' || project.category === filter);
}
