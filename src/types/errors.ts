// Error Codes
export enum AppErrorCode {
    // Configuration / Validation (ERR_1xxx)
    MissingParameter = 'ERR_1000', // General missing param (mapped to protocol -32602)
    InvalidState = 'ERR_1001', // e.g., invalid state filter
    InvalidArgument = 'ERR_1002', // General invalid arg (mapped to protocol -32602)
    ConfigurationError = 'ERR_1003', // e.g., Missing API Key for generate_project_plan
  
    // Resource Not Found (ERR_2xxx)
    ProjectNotFound = 'ERR_2000',
    TaskNotFound = 'ERR_2001',
    // No need for EmptyTaskFile code, handle during load
  
    // Business Logic / State Rules (ERR_3xxx)
    TaskNotDone = 'ERR_3000', // Cannot approve/finalize if task not done
    ProjectAlreadyCompleted = 'ERR_3001',
    // No need for CannotDeleteCompletedTask, handle in logic
    TasksNotAllDone = 'ERR_3003', // Cannot finalize project
    TasksNotAllApproved = 'ERR_3004', // Cannot finalize project
    CannotModifyApprovedTask = 'ERR_3005', // Added for clarity
    TaskAlreadyApproved = 'ERR_3006', // Added for clarity
  
    // File System (ERR_4xxx)
    FileReadError = 'ERR_4000', // Includes not found, permission denied etc.
    FileWriteError = 'ERR_4001',
    FileParseError = 'ERR_4002', // If needed during JSON parsing
    ReadOnlyFileSystem = 'ERR_4003',
  
    // LLM Interaction Errors (ERR_5xxx)
    LLMGenerationError = 'ERR_5000',
    LLMConfigurationError = 'ERR_5001', // Auth, key issues specifically with LLM provider call
  
    // Unknown / Catch-all (ERR_9xxx)
    Unknown = 'ERR_9999'
  }
  
  // Add a base AppError class
  export class AppError extends Error {
    public readonly code: AppErrorCode;
    public readonly details?: unknown;
  
    constructor(message: string, code: AppErrorCode, details?: unknown) {
      super(message);
      this.name = this.constructor.name; // Set name to the specific error class name
      this.code = code;
      this.details = details;
    }
  }
  