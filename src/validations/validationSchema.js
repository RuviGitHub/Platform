import Joi from "joi";

// Common validation rules
const stringWithMinMax = (min, max) =>
  Joi.string()
    .min(min)
    .max(max)
    .trim()
    .required()
    .messages({
      "string.base": `Field must be a string.`,
      "string.empty": `Field cannot be empty.`,
      "string.min": `Field must be at least ${min} characters long.`,
      "string.max": `Field must be at most ${max} characters long.`,
      "any.required": `Field is required.`,
    });

const emailValidation = Joi.string()
  .email()
  .min(3)
  .max(100)
  .trim()
  .required()
  .messages({
    "string.base": "Email must be a string.",
    "string.empty": "Email is required.",
    "string.email": "Email must be a valid email address.",
    "string.min": "Email must be at least 3 characters long.",
    "string.max": "Email must be at most 100 characters long.",
    "any.required": "Email is required.",
  });

const passwordValidation = Joi.string()
  .min(6)
  .max(60)
  .trim()
  .required()
  .messages({
    "string.base": "Password must be a string.",
    "string.empty": "Password is required.",
    "string.min": "Password must be at least 6 characters long.",
    "string.max": "Password must be at most 60 characters long.",
    "any.required": "Password is required.",
  });

const fullNameValidation = Joi.string()
  .min(3)
  .max(120)
  .trim()
  .required()
  .messages({
    "string.base": "Full Name must be a string.",
    "string.empty": "Full Name is required.",
    "string.min": "Full Name must be at least 3 characters long.",
    "string.max": "Full Name must be at most 120 characters long.",
    "any.required": "Full Name is required.",
  });

const nameValidation = Joi.string().min(3).max(60).trim().required().messages({
  "string.base": "Definition Name must be a string.",
  "string.empty": "Definition Name is required.",
  "string.min": "Definition Name must be at least 3 characters long.",
  "string.max": "Definition Name must be at most 60 characters long.",
  "any.required": "Definition Name is required.",
});

const descriptionValidation = Joi.string()
  .min(3)
  .max(150)
  .trim()
  .required()
  .messages({
    "string.base": "Description must be a string.",
    "string.empty": "Description is required.",
    "string.min": "Description must be at least 3 characters long.",
    "string.max": "Description must be at most 150 characters long.",
    "any.required": "Description is required.",
  });

const phoneNumberValidation = Joi.string()
  .pattern(/^[0-9]+$/)
  .min(3)
  .max(15)
  .required()
  .messages({
    "string.base": "Phone Number must be a string.",
    "string.pattern.base": "Phone Number must contain only digits.",
    "string.min": "Phone Number must be at least 3 digits long.",
    "string.max": "Phone Number must be at most 15 digits long.",
    "any.required": "Phone Number is required.",
  });

const postalCodeValidation = Joi.string()
  .min(3)
  .max(10)
  .trim()
  .required()
  .messages({
    "string.base": "Postal Code must be a string.",
    "string.empty": "Postal Code is required.",
    "string.min": "Postal Code must be at least 3 characters long.",
    "string.max": "Postal Code must be at most 10 characters long.",
    "any.required": "Postal Code is required.",
  });

const addressLineValidation = Joi.string()
  .min(3)
  .max(120)
  .trim()
  .required()
  .messages({
    "string.base": "Address Line must be a string.",
    "string.empty": "Address Line is required.",
    "string.min": "Address Line must be at least 3 characters long.",
    "string.max": "Address Line must be at most 120 characters long.",
    "any.required": "Address Line is required.",
  });

const booleanValidation = Joi.boolean();

// Endpoint: v1/platform/user/login
export const loginUserValidationSchema = Joi.object({
  email: emailValidation,
  password: passwordValidation,
  pushId: Joi.string().allow("").optional().trim(),
  deviceId: Joi.string().allow("").optional().trim(),
});

// Endpoint: v1/platform/workspace/start-premium-package
export const workspaceBillingDetailsSchema = Joi.object({
  workspaceId: stringWithMinMax(24, 24),
  packageId: stringWithMinMax(24, 24),
  defaultUserCount: Joi.number().integer().min(0).required().messages({
    "number.base": "Default User Count must be a number.",
    "number.integer": "Default User Count must be an integer.",
    "number.min": "Default User Count must be at least 0.",
    "any.required": "Default User Count is required.",
  }),
  additionalUserCount: Joi.number().integer().min(0).required().messages({
    "number.base": "Additional User Count must be a number.",
    "number.integer": "Additional User Count must be an integer.",
    "number.min": "Additional User Count must be at least 0.",
    "any.required": "Additional User Count is required.",
  }),
  totalUserCount: Joi.number().integer().min(1).required().messages({
    "number.base": "Total User Count must be a number.",
    "number.integer": "Total User Count must be an integer.",
    "number.min": "Total User Count must be at least 1.",
    "any.required": "Total User Count is required.",
  }),
  totalPrice: Joi.number().precision(2).min(0).required().messages({
    "number.base": "Total Price must be a number.",
    "number.precision": "Total Price must have at most 2 decimal places.",
    "number.min": "Total Price must be at least 0.",
    "any.required": "Total Price is required.",
  }),
  countryId: stringWithMinMax(24, 24),
  addressLine01: addressLineValidation,
  addressLine02: Joi.string().trim().allow("").optional(),
  city: stringWithMinMax(1, 100),
  postalCode: postalCodeValidation,
  state: stringWithMinMax(1, 100),
});

// Endpoint: v1/platform/user/register-user
export const registerUserValidationSchema = Joi.object({
  password: passwordValidation,
  fullName: fullNameValidation,
  phoneNumber: phoneNumberValidation,
  countryCode: Joi.string().required().messages({
    "string.base": "Country Code must be a string.",
    "string.empty": "Country Code cannot be empty.",
    "any.required": "Country Code is required.",
  }),
});

// Endpoint: v1/platform/workspace/register-workspace
export const registerWorkspaceValidationSchema = Joi.object({
  packageId: stringWithMinMax(24, 24),
  email: emailValidation,
  fullName: Joi.string().trim().min(3).max(50).required().messages({
    "string.base": "Full Name must be a string.",
    "string.empty": "Full Name cannot be empty.",
    "string.min": "Full Name must be at least 3 characters long.",
    "string.max": "Full Name must be at most 50 characters long.",
    "any.required": "Full Name is required.",
  }),
  phoneNumber: phoneNumberValidation,
  countryCode: Joi.string()
    .pattern(/^[0-9]+$/)
    .length(2)
    .required()
    .messages({
      "string.base": "Country Code must be a string.",
      "string.pattern.base": "Country Code must contain only digits.",
      "string.length": "Country Code must be exactly 2 digits long.",
      "any.required": "Country Code is required.",
    }),
  timeZoneId: stringWithMinMax(24, 24),
  password: Joi.string().min(6).max(20).required().messages({
    "string.base": "Password must be a string.",
    "string.empty": "Password cannot be empty.",
    "string.min": "Password must be at least 6 characters long.",
    "string.max": "Password must be at most 20 characters long.",
    "any.required": "Password is required.",
  }),
  workspaceName: Joi.string().trim().min(3).max(50).required().messages({
    "string.base": "Workspace Name must be a string.",
    "string.empty": "Workspace Name cannot be empty.",
    "string.min": "Workspace Name must be at least 3 characters long.",
    "string.max": "Workspace Name must be at most 50 characters long.",
    "any.required": "Workspace Name is required.",
  }),
  workspaceColorId: stringWithMinMax(24, 24),
  workspaceLogoURL: Joi.string().allow("").optional(),
  pushId: Joi.string().allow("").optional().trim(),
  deviceId: Joi.string().allow("").optional().trim(),
});

// Endpoint: v1/platform/calendar/create-calendar
const holidayValidationSchema = Joi.object({
  name: stringWithMinMax(3, 60),
  date: Joi.date().required().messages({
    "date.base": "Holiday date must be a valid date.",
    "any.required": "Holiday date is required.",
  }),
});

const workingDaysValidationSchema = Joi.object({
  name: stringWithMinMax(3, 60),
  date: Joi.date().required().messages({
    "date.base": "Working day date must be a valid date.",
    "any.required": "Working day date is required.",
  }),
});

export const createCalendarValidationSchema = Joi.object({
  workspaceId: stringWithMinMax(24, 24),
  calendarName: stringWithMinMax(3, 100),
  description: Joi.string().min(3).max(150).trim().messages({
    "string.base": "Description must be a string.",
    "string.empty": "Description cannot be empty.",
    "string.min": "Description must be at least 3 characters long.",
    "string.max": "Description must be at most 150 characters long.",
  }),
  workingDays: Joi.array().items(workingDaysValidationSchema).default([]),
  holidays: Joi.array().items(holidayValidationSchema).default([]),
  sunday: Joi.boolean().default(false),
  monday: Joi.boolean().default(false),
  tuesday: Joi.boolean().default(false),
  wednesday: Joi.boolean().default(false),
  thursday: Joi.boolean().default(false),
  friday: Joi.boolean().default(false),
  saturday: Joi.boolean().default(false),
  calendarStatus: Joi.number().valid(0, 1).required().messages({
    "number.base": "Calendar status must be a number.",
    "any.only": "Calendar status must be one of [0, 1].",
    "any.required": "Calendar status is required.",
  }),
  isActive: Joi.boolean().default(true),
  workspaceUserId: stringWithMinMax(24, 24),
});


// Date entry schema used in calendar endpoints
const dateEntrySchema = Joi.object({
  name: nameValidation,
  date: Joi.date().required().messages({
    "date.base": "Date must be a valid date.",
    "any.required": "Date is required.",
  }),
});

// Endpoint: v1/platform/calendar/update-calendar
export const updateCalendarValidationSchema = Joi.object({
  workspaceId: stringWithMinMax(24, 24),
  calendarId: stringWithMinMax(24, 24),
  calendarName: nameValidation,
  description: descriptionValidation,
  holidays: Joi.array().items(dateEntrySchema).messages({
    "array.base": "Holidays must be an array of valid entries.",
  }),
  workingDays: Joi.array().items(dateEntrySchema).messages({
    "array.base": "Working days must be an array of valid entries.",
  }),
  sunday: Joi.boolean().default(false),
  monday: Joi.boolean().default(false),
  tuesday: Joi.boolean().default(false),
  wednesday: Joi.boolean().default(false),
  thursday: Joi.boolean().default(false),
  friday: Joi.boolean().default(false),
  saturday: Joi.boolean().default(false),
});

const fieldValidationSchema = Joi.object({
  fieldName: Joi.string().min(3).max(60).required(),
  fieldType: Joi.string()
    .valid("text", "number", "date", "email", "password")
    .required(), // Example types
  placeholder: Joi.string().max(100).optional(),
  helperText: Joi.string().max(150).optional(),
  isRequired: booleanValidation,
  isActive: booleanValidation,
});

// Endpoint: v1/platform/def/create-def
export const workspaceDEFValidationSchema = Joi.object({
  workspaceId: stringWithMinMax(24, 24),
  defName: nameValidation,
  defDescription: descriptionValidation,
  defFields: Joi.array().items(fieldValidationSchema).default([]),
});







// Common pagination schema
export const paginationSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1).empty(null),
  limit: Joi.number().integer().min(1).default(10).empty(null),
  sort: Joi.string().default("createdAt").empty(null),
  order: Joi.string().valid("asc", "desc").default("asc").empty(null),
  search: Joi.string().allow("").default("").empty(null),
});
