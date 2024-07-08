import Joi from 'joi';

// Endpoint : v1/platform/user/login
export const loginUserValidationSchema = Joi.object({
  email: Joi.string().email().required().trim().messages({
    'string.empty': 'Email is required',
    'string.email': 'Email must be a valid email address',
  }),
  password: Joi.string().required().trim().messages({
    'string.empty': 'Password is required',
  }),
  pushId: Joi.string().allow('').optional().trim(),
  deviceId: Joi.string().allow('').optional().trim(),
});

//Endpoint : v1/platform/workspace/start-premium-package
export const workspaceBillingDetailsSchema = Joi.object({
  workspaceId: Joi.string().hex().length(24).required().messages({
    'string.base': 'WorkspaceId must be a valid ObjectId string.',
    'string.length': 'WorkspaceId must be exactly 24 characters long.',
    'any.required': 'WorkspaceId is required.',
  }),
  packageId: Joi.string().hex().length(24).required().messages({
    'string.base': 'PackageId must be a valid ObjectId string.',
    'string.length': 'PackageId must be exactly 24 characters long.',
    'any.required': 'PackageId is required.',
  }),
  defaultUserCount: Joi.number().integer().min(0).required().messages({
    'number.base': 'Default User Count must be a number.',
    'number.integer': 'Default User Count must be an integer.',
    'number.min': 'Default User Count must be at least 0.',
    'any.required': 'Default User Count is required.',
  }),
  additionalUserCount: Joi.number().integer().min(0).required().messages({
    'number.base': 'Additional User Count must be a number.',
    'number.integer': 'Additional User Count must be an integer.',
    'number.min': 'Additional User Count must be at least 0.',
    'any.required': 'Additional User Count is required.',
  }),
  totalUserCount: Joi.number().integer().min(1).required().messages({
    'number.base': 'Total User Count must be a number.',
    'number.integer': 'Total User Count must be an integer.',
    'number.min': 'Total User Count must be at least 1.',
    'any.required': 'Total User Count is required.',
  }),
  totalPrice: Joi.number().precision(2).min(0).required().messages({
    'number.base': 'Total Price must be a number.',
    'number.precision': 'Total Price must have at most 2 decimal places.',
    'number.min': 'Total Price must be at least 0.',
    'any.required': 'Total Price is required.',
  }),
  countryId: Joi.string().hex().length(24).required().messages({
    'string.base': 'CountryId must be a valid ObjectId string.',
    'string.length': 'CountryId must be exactly 24 characters long.',
    'any.required': 'CountryId is required.',
  }),
  addressLine01: Joi.string().trim().required().messages({
    'string.base': 'Address Line 01 must be a string.',
    'string.empty': 'Address Line 01 cannot be empty.',
    'any.required': 'Address Line 01 is required.',
  }),
  addressLine02: Joi.string().trim().allow('').messages({
    'string.base': 'Address Line 02 must be a string.',
  }),
  city: Joi.string().trim().required().messages({
    'string.base': 'City must be a string.',
    'string.empty': 'City cannot be empty.',
    'any.required': 'City is required.',
  }),
  postalCode: Joi.string().trim().required().messages({
    'string.base': 'Postal Code must be a string.',
    'string.empty': 'Postal Code cannot be empty.',
    'any.required': 'Postal Code is required.',
  }),
  state: Joi.string().trim().required().messages({
    'string.base': 'State must be a string.',
    'string.empty': 'State cannot be empty.',
    'any.required': 'State is required.',
  }),
});

//Endpoint : v1/platform/user/register-user
export const registerUserValidationSchema = Joi.object({
  password: Joi.string().required().messages({
    'string.base': 'Password must be a string.',
    'string.empty': 'Password cannot be empty.',
    'any.required': 'Password is required.',
  }),
  fullName: Joi.string().trim().min(3).max(60).required().messages({
    'string.base': 'Full Name must be a string.',
    'string.empty': 'Full Name cannot be empty.',
    'string.min': 'Full Name must be at least 3 characters long.',
    'string.max': 'Full Name must be at most 60 characters long.',
    'any.required': 'Full Name is required.',
  }),
  phoneNumber: Joi.string().pattern(/^[0-9]+$/).min(6).max(15).required().messages({
    'string.base': 'Phone Number must be a string.',
    'string.pattern.base': 'Phone Number must contain only digits.',
    'string.min': 'Phone Number must be at least 6 digits long.',
    'string.max': 'Phone Number must be at most 15 digits long.',
    'any.required': 'Phone Number is required.',
  }),
  countryCode: Joi.string().required().messages({
    'string.base': 'Country Code must be a string.',
    'string.empty': 'Country Code cannot be empty.',
    'any.required': 'Country Code is required.',
  }),
});

//Endpoint : v1/platform/workspace/register-workspace
export const registerWorkspaceValidationSchema = Joi.object({
  packageId: Joi.string().hex().length(24).required().messages({
    'string.base': 'PackageId must be a valid ObjectId string.',
    'string.length': 'PackageId must be exactly 24 characters long.',
    'any.required': 'PackageId is required.',
  }),
  email: Joi.string().email().required().trim().messages({
    'string.empty': 'Email is required',
    'string.email': 'Email must be a valid email address',
  }),
  fullName: Joi.string().trim().min(3).max(50).required().messages({
    'string.base': 'Full Name must be a string.',
    'string.empty': 'Full Name cannot be empty.',
    'string.min': 'Full Name must be at least 3 characters long.',
    'string.max': 'Full Name must be at most 50 characters long.',
    'any.required': 'Full Name is required.',
  }),
  phoneNumber: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required().messages({
    'string.base': 'Phone Number must be a string.',
    'string.pattern.base': 'Phone Number must contain only digits.',
    'string.min': 'Phone Number must be at least 10 digits long.',
    'string.max': 'Phone Number must be at most 15 digits long.',
    'any.required': 'Phone Number is required.',
  }),
  countryCode: Joi.string().pattern(/^[0-9]+$/).length(2).required().messages({
    'string.base': 'Country Code must be a string.',
    'string.pattern.base': 'Country Code must contain only digits.',
    'string.length': 'Country Code must be exactly 2 digits long.',
    'any.required': 'Country Code is required.',
  }),
  timeZoneId: Joi.string().hex().length(24).required().messages({
    'string.base': 'Time Zone ID must be a valid ObjectId string.',
    'string.length': 'Time Zone ID must be exactly 24 characters long.',
    'any.required': 'Time Zone ID is required.',
  }),
  password: Joi.string().min(6).max(20).required().messages({
    'string.base': 'Password must be a string.',
    'string.empty': 'Password cannot be empty.',
    'string.min': 'Password must be at least 6 characters long.',
    'string.max': 'Password must be at most 20 characters long.',
    'any.required': 'Password is required.',
  }),
  workspaceName: Joi.string().trim().min(3).max(50).required().messages({
    'string.base': 'Workspace Name must be a string.',
    'string.empty': 'Workspace Name cannot be empty.',
    'string.min': 'Workspace Name must be at least 3 characters long.',
    'string.max': 'Workspace Name must be at most 50 characters long.',
    'any.required': 'Workspace Name is required.',
  }),
  workspaceColorId: Joi.string().hex().length(24).required().messages({
    'string.base': 'Workspace Color ID must be a valid ObjectId string.',
    'string.length': 'Workspace Color ID must be exactly 24 characters long.',
    'any.required': 'Workspace Color ID is required.',
  }),
  workspaceLogoURL: Joi.string().allow('').optional(),
  pushId: Joi.string().allow('').optional().trim(),
  deviceId: Joi.string().allow('').optional().trim(),
});

//Endpoint : v1/platform/calendar/create-calendar
export const createCalendarValidationSchema = Joi.object({
  workspaceId: Joi.string().hex().length(24).required().messages({
    'string.base': 'Workspace ID must be a valid ObjectId string.',
    'string.length': 'Workspace ID must be exactly 24 characters long.',
    'any.required': 'Workspace ID is required.',
  }),
  calendarName: Joi.string().trim().min(3).max(100).required().messages({
    'string.base': 'Calendar name must be a string.',
    'string.min': 'Calendar name must be at least 3 characters long.',
    'string.max': 'Calendar name must be at most 100 characters long.',
    'any.required': 'Calendar name is required.',
  }),
  calendarStatus: Joi.number().valid(0, 1).required().messages({
    'number.base': 'Calendar status must be a number.',
    'any.only': 'Calendar status must be one of [0, 1].',
    'any.required': 'Calendar status is required.',
  }),
  workspaceUserId: Joi.string().hex().length(24).required().messages({
    'string.base': 'Workspace User ID must be a valid ObjectId string.',
    'string.length': 'Workspace User ID must be exactly 24 characters long.',
    'any.required': 'Workspace User ID is required.',
  }),
});

const dateEntrySchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name is required.',
    'any.required': 'Name is required.',
  }),
  date: Joi.date().required().messages({
    'date.base': 'Date must be a valid date.',
    'any.required': 'Date is required.',
  }),
});

//Endpoint : v1/platform/calendar/update-calendar
export const updateCalendarValidationSchema = Joi.object({
  workspaceId: Joi.string().hex().length(24).required().messages({
    'string.base': 'Workspace ID must be a valid ObjectId string.',
    'string.length': 'Workspace ID must be exactly 24 characters long.',
    'any.required': 'Workspace ID is required.',
  }),
  calendarId: Joi.string().hex().length(24).required().messages({
    'string.base': 'Calendar ID must be a valid ObjectId string.',
    'string.length': 'Calendar ID must be exactly 24 characters long.',
    'any.required': 'Calendar ID is required.',
  }),
  calendarName: Joi.string().trim().min(3).max(100).required().messages({
    'string.base': 'Calendar name must be a string.',
    'string.min': 'Calendar name must be at least 3 characters long.',
    'string.max': 'Calendar name must be at most 100 characters long.',
    'any.required': 'Calendar name is required.',
  }),
  description: Joi.string().trim().allow('').messages({
    'string.base': 'Description must be a string.',
  }),
  holidays: Joi.array().items(dateEntrySchema).messages({
    'array.base': 'Holidays must be an array of valid entries.',
  }),
  workingDays: Joi.array().items(dateEntrySchema).messages({
    'array.base': 'Working days must be an array of valid entries.',
  }),
  sunday: Joi.boolean().default(false).messages({
    'boolean.base': 'Sunday must be a boolean value.',
  }),
  monday: Joi.boolean().default(false).messages({
    'boolean.base': 'Monday must be a boolean value.',
  }),
  tuesday: Joi.boolean().default(false).messages({
    'boolean.base': 'Tuesday must be a boolean value.',
  }),
  wednesday: Joi.boolean().default(false).messages({
    'boolean.base': 'Wednesday must be a boolean value.',
  }),
  thursday: Joi.boolean().default(false).messages({
    'boolean.base': 'Thursday must be a boolean value.',
  }),
  friday: Joi.boolean().default(false).messages({
    'boolean.base': 'Friday must be a boolean value.',
  }),
  saturday: Joi.boolean().default(false).messages({
    'boolean.base': 'Saturday must be a boolean value.',
  }),
});

export const fieldValidationSchema = Joi.object({
  fieldName: Joi.string().required().messages({
    'string.base': 'Field name must be a string.',
    'any.required': 'Field name is required.',
  }),
  fieldType: Joi.string().required().messages({
    'string.base': 'Field type must be a string.',
    'any.required': 'Field type is required.',
  }),
  placeholder: Joi.string().optional().allow(null, ''),
  helperText: Joi.string().optional().allow(null, ''),
  isRequired: Joi.boolean().default(false),
});

//Endpoint : v1/platform/def/create-def
export const workspaceDEFValidationSchema = Joi.object({
  workspaceId: Joi.string().hex().length(24).required().messages({
    'string.base': 'Workspace ID must be a valid ObjectId string.',
    'string.length': 'Workspace ID must be exactly 24 characters long.',
    'any.required': 'Workspace ID is required.',
  }),
  defName: Joi.string().required().messages({
    'string.base': 'Definition name must be a string.',
    'any.required': 'Definition name is required.',
  }),
  defDescription: Joi.string().required().messages({
    'string.base': 'Definition description must be a string.',
    'any.required': 'Definition description is required.',
  }),
  defFields: Joi.array().items(fieldValidationSchema).default([]),
});

//Common
export const paginationSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1).empty(null),
  limit: Joi.number().integer().min(1).default(10).empty(null),
  sort: Joi.string().default('createdAt').empty(null),
  order: Joi.string().valid('asc', 'desc').default('asc').empty(null),
  search: Joi.string().allow('').default('').empty(null),
});

