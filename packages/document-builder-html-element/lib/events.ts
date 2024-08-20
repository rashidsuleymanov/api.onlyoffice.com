export class DocumentBuilderErrorEvent extends ErrorEvent {
  static get type(): string {
    return "documentbuildererror"
  }

  constructor(eventInitDict?: ErrorEventInit) {
    super(DocumentBuilderErrorEvent.type, eventInitDict)
  }
}

export class DocumentBuilderReadyEvent extends Event {
  static get type(): string {
    return "documentbuilderready"
  }

  constructor(eventInitDict?: EventInit) {
    super(DocumentBuilderReadyEvent.type, eventInitDict)
  }
}
