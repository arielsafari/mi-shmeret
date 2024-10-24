

# How to add shift status?

### Pages and Components
  - /groups/<mador-946>
    - CurrentStatus - "All systems operational" | "There are some incidents"
    - CurrentStatusGrid - for each service - its status. if there is an incident - link to the incident page
    - SubscribeToStatusUpdates - Subscribe to updates using: mail, webhook
  - /groups/<mador-946>/incidents-history
    - IncidentMonth - shows timeline with all the incidents (not per day)
  - /groups/<mador-946>/incidents/<incident-id>
    - IncidentTimeline - shows the timeline of a specific incident - status, description, time


### API Routes
  - /api/groups/[group]/current/status
  - /api/groups/[group]/subscribe-to-updates
  - /api/groups/[group]/incidents/
  - /api/groups/[group]/incidents/[incident]


### Interfaces
  - CurrentStatus
    - globalStatus: "operational" | "partial" | "all-down"
    - SystemStatus: [
      - Title
      - Description
      - currentStatus: : "operational" | "down"
    ]
  - Incident
    - title
    - affectedSystems
    - createdAt
    - updatedAt
    - closedAt
    - currentStatus: "open" | "in treatment" | "resolved"
    - updates: [
      - type: "Investigating" | "Update" | "Resolved"
      - text: string (markdown)
      - createdAt
    ]

