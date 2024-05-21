export interface IOfficer {
    etag: string
    links: Links
    kind: string
    items_per_page: number
    items: Item[]
    active_count: number
    total_results: number
    resigned_count: number
  }
  
  export interface Links {
    self: string
  }
  
  export interface Item {
    address: Address
    name: string
    appointed_on: string
    officer_role: string
    links: Links2
    occupation?: string
    nationality?: string
    date_of_birth?: DateOfBirth
    country_of_residence?: string
    resigned_on?: string
  }
  
  export interface Address {
    premises?: string
    postal_code: string
    country?: string
    locality: string
    address_line_1: string
    address_line_2?: string
  }
  
  export interface Links2 {
    officer: Officer
  }
  
  export interface Officer {
    appointments: string
  }
  
  export interface DateOfBirth {
    month: number
    year: number
  }
  