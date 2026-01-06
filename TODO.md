# Rick & Morty Encyclopedia – Frontend Scope

This document defines the pages and features for a **frontend-only Rick & Morty Encyclopedia**, designed to practice **GraphQL**, **unit testing**, and **E2E testing** using a public API.

---

## Core Pages (Must-have)

### 1. Home / Characters List

**Purpose**  
Main discovery page.

**Features**
- [ ] Paginated character list
- [ ] Search by name
- [ ] Filters:
  - [ ] Status (Alive / Dead / Unknown)
  - [ ] Species
  - [ ] Gender
- [x] Loading state (skeletons) 
- [x] Empty results state
- [x] Error state

**GraphQL practice**
- Queries with variables
- Pagination
- Filtering arguments

**Testing focus**
- Unit: filter logic, pagination helpers
- E2E: search + filter combinations

---

### 2. Character Detail Page

**Purpose**  
Deep dive into a single character.

**Features**
- Character info:
  - Name
  - Image
  - Status
  - Species
  - Gender
  - Origin
- Episodes list the character appears in
- Links to episode detail pages
- Back navigation

**GraphQL practice**
- Nested queries
- Fragment reuse
- Conditional rendering

**Testing focus**
- Unit: data mapping & conditional fields
- E2E: open character → verify details

---

### 3. Episodes List

**Purpose**  
Explore episodes.

**Features**
- Paginated episodes list
- Filter by:
  - Season
  - Episode code (S01, S02…)
- Episode cards with title and air date

**GraphQL practice**
- Multiple entity types
- Query reuse
- Pagination patterns

**Testing focus**
- Unit: season filter logic
- E2E: browse → open episode

---

### 4. Episode Detail Page

**Purpose**  
Contextual navigation between entities.

**Features**
- Episode details:
  - Name
  - Air date
  - Episode code
- Characters appearing in the episode
- Links to character detail pages

**GraphQL practice**
- Relationship traversal
- Efficient query shaping

**Testing focus**
- E2E: episode → character navigation

---

### 5. Locations List

**Purpose**  
Complete the encyclopedia.

**Features**
- Paginated locations list
- Filter by:
  - Type
  - Dimension
- Location cards

**GraphQL practice**
- Reusable list components
- Filtering variables

**Testing focus**
- Unit: filter utilities
- E2E: filter + open detail

---

### 6. Location Detail Page

**Purpose**  
Explore world-building.

**Features**
- Location details:
  - Name
  - Type
  - Dimension
- Residents list
- Links to character detail pages

**GraphQL practice**
- Deep nested relations
- Fragment sharing

**Testing focus**
- E2E: location → resident → character

---

## Cross-Cutting Features

### 7. Global Search

**Features**
- Search across:
  - Characters
  - Episodes
  - Locations
- Grouped results by type
- Keyboard navigation

**GraphQL practice**
- Multiple queries
- Conditional execution
- Client-side aggregation

**Testing focus**
- Unit: search matching logic
- E2E: keyboard-driven search

---

### 8. Pagination UX

**Options**
- Page numbers
- Infinite scroll
- "Load more" button

**Testing focus**
- Unit: page calculation logic
- E2E: scrolling / loading behavior

---

### 9. Error & Empty States

**Features**
- Network error fallback
- No-results UI
- Retry actions

**Testing focus**
- Unit: state rendering
- E2E: simulated API failure (via mocks)

---

## Advanced / Optional Features

### 10. Favorites (Client-side only)

**Features**
- Mark characters as favorites
- Persist favorites in localStorage
- Favorites page

**Testing focus**
- Unit: persistence logic
- E2E: add/remove favorites

---

### 11. Compare Characters

**Features**
- Select multiple characters
- Side-by-side comparison view

**Testing focus**
- Unit: comparison logic
- E2E: selection + comparison

---

### 12. Recently Viewed

**Features**
- Track recently viewed characters
- Display recently viewed section on home page

**Testing focus**
- Unit: recency tracking logic
- E2E: navigation order

---

## Navigation Structure

- `/`
  - `/characters`
    - `/characters/:id`
  - `/episodes`
    - `/episodes/:id`
  - `/locations`
    - `/locations/:id`
  - `/favorites`
  - `/search`


---

## Testing Coverage Map

| Feature            | Unit Tests | E2E Tests |
|--------------------|------------|-----------|
| Lists & filters    | High       | Medium    |
| Detail pages       | Medium     | High      |
| Navigation         | Low        | High      |
| Error states       | Medium     | Medium    |
| Favorites          | High       | Medium    |

---

## Recommended Build Order

1. Characters list
2. Character detail
3. Episodes list and detail
4. Locations list and detail
5. Global search
6. Favorites
7. Edge cases and error handling
