import { Publisher, Subjects, TicketCreatedEvent } from '@ssticketingdev/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
