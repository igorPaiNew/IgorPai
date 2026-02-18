/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: Products
 * Interface for Products
 */
export interface Products {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  productName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType boolean */
  available?: boolean;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  productImage?: string;
  /** @wixFieldType date */
  launchDate?: Date | string;
}


/**
 * Collection ID: accessinstructions
 * Interface for AccessInstructions
 */
export interface AccessInstructions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType number */
  stepNumber?: number;
  /** @wixFieldType text */
  stepDescription?: string;
  /** @wixFieldType text */
  instructionText?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  visualAid?: string;
  /** @wixFieldType text */
  keyword?: string;
  /** @wixFieldType url */
  contactLink?: string;
}
