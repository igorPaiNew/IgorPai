/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

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
