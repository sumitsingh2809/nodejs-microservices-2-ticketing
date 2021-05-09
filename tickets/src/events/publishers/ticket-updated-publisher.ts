import { Publisher, Subjects, TicketUpdatedEvent } from '@ssticketingdev/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}
