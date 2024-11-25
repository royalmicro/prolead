# Project Structure Definition
 ```
├── app/                 # Application layer (orchestration, use cases)
│   ├── dtos/            # Data Transfer Objects (for validation and data transport)
│   ├── services/        # Application services (orchestrators, repository calls, and application logic)
│   ├── controllers/     # Controllers (exposed endpoints)
│   └── app.module.ts    # Application module configuration
│
├── domain/              # Domain layer (business rules and models)
│   ├── entities/        # Entities (domain models, mapped with TypeORM)
│   ├── repositories/    # Repository interfaces (abstraction for infrastructure)
│   ├── exceptions/      # Domain-specific exceptions
│   ├── value-objects/   # Value objects (if needed)
│   └── services/        # Domain services (pure business logic, without external dependencies)
│
├── infrastructure/      # Infrastructure layer (external details implementation)
│   ├── persistence/     # Persistence (TypeORM Repositories)
│   │   ├── entities/    # Database entities (may extend domain entities)
│   │   ├── mappers/     # Mappers (convert between Infrastructure and Domain layers)
│   │   └── repositories/ # Concrete repository implementations
│   ├── config/          # Application configuration (TypeORM, environment variables, etc.)
│   ├── adapters/        # Adapters for external systems (APIs, external services)
│   └── infrastructure.module.ts # Infrastructure module configuration
│
├── shared/              # Shared code across layers
│   ├── utils/           # Generic utilities
│   ├── constants/       # Common constants
│   └── decorators/      # Custom decorators
│
├── main.ts              # Application entry point
└── app.module.ts        # Root module
 ```
