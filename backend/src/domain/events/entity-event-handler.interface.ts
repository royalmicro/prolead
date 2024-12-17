export interface EntityEventHandlerInterface {
  handleCreatedEvent(payload: any): void;
  handleUpdatedEvent(payload: any): void;
  handleDeletedEvent(payload: any): void;
}
