const timeZoneList = [
  {
    timeZone: "Pacific/McolorIdway ( UTC-11:00 )",
    timeDifferent: " UTC-11:00",
    name: "Midway Island",
  },
  {
    timeZone: "Pacific/Honolulu ( UTC-10:00 )",
    timeDifferent: " UTC-10:00",
    name: "Hawaii",
  },
  {
    timeZone: "America/Anchorage ( UTC-08:00 )",
    timeDifferent: " UTC-08:00",
    name: "Alaska",
  },
  {
    timeZone: "America/Tijuana ( UTC-07:00 )",
    timeDifferent: " UTC-07:00",
    name: "Baja California",
  },
  {
    timeZone: "America/Los_Angeles ( UTC-07:00 )",
    timeDifferent: " UTC-07:00",
    name: "Pacific Time US and Canada)",
  },
  {
    timeZone: "America/Phoenix ( UTC-07:00 )",
    timeDifferent: " UTC-07:00",
    name: "Arizona",
  },
  {
    timeZone: "America/Chihuahua ( UTC-06:00 )",
    timeDifferent: " UTC-06:00",
    name: "Chihuahua",
  },
  {
    timeZone: "America/Denver ( UTC-06:00 )",
    timeDifferent: " UTC-06:00",
    name: "Mountain Time US and Canada)",
  },
  {
    timeZone: "America/Belize ( UTC-06:00 )",
    timeDifferent: " UTC-06:00",
    name: "Central America",
  },
  {
    timeZone: "America/Chicago ( UTC-05:00 )",
    timeDifferent: " UTC-05:00",
    name: "Central Time US and Canada)",
  },
  {
    timeZone: "America/Mexico_City ( UTC-05:00 )",
    timeDifferent: " UTC-05:00",
    name: "Guadalajara",
  },
  {
    timeZone: "America/Regina ( UTC-06:00 )",
    timeDifferent: " UTC-06:00",
    name: "Saskatchewan",
  },
  {
    timeZone: "America/Bogota ( UTC-05:00 )",
    timeDifferent: " UTC-05:00",
    name: "Bogota",
  },
  {
    timeZone: "America/Jamaica ( UTC-05:00 )",
    timeDifferent: " UTC-05:00",
    name: "Kingston",
  },
  {
    timeZone: "America/New_York ( UTC-04:00 )",
    timeDifferent: " UTC-04:00",
    name: "Eastern Time US and Canada)",
  },
  {
    timeZone: "America/Indiana/Indianapolis ( UTC-04:00 )",
    timeDifferent: " UTC-04:00",
    name: "Indiana East)",
  },
  {
    timeZone: "America/Caracas ( UTC-04:30 )",
    timeDifferent: " UTC-04:30",
    name: "Caracas",
  },
  {
    timeZone: "America/Asuncion ( UTC-03:00 )",
    timeDifferent: " UTC-03:00",
    name: "Asuncion",
  },
  {
    timeZone: "America/Halifax ( UTC-03:00 )",
    timeDifferent: " UTC-03:00",
    name: "Atlantic Time Canada)",
  },
  {
    timeZone: "America/Cuiaba ( UTC-04:00 )",
    timeDifferent: " UTC-04:00",
    name: "Cuiaba",
  },
  {
    timeZone: "America/Manaus ( UTC-04:00 )",
    timeDifferent: " UTC-04:00",
    name: "Georgetown",
  },
  {
    timeZone: "America/St_Johns ( UTC-02:30 )",
    timeDifferent: " UTC-02:30",
    name: "Newfoundland and Labrador",
  },
  {
    timeZone: "America/Sao_Paulo ( UTC-03:00 )",
    timeDifferent: " UTC-03:00",
    name: "Brasilia",
  },
  {
    timeZone: "America/Buenos_Aires ( UTC-03:00 )",
    timeDifferent: " UTC-03:00",
    name: "Buenos Aires",
  },
  {
    timeZone: "America/Cayenne ( UTC-03:00 )",
    timeDifferent: " UTC-03:00",
    name: "Cayenne",
  },
  {
    timeZone: "America/Godthab ( UTC-02:00 )",
    timeDifferent: " UTC-02:00",
    name: "Greenland",
  },
  {
    timeZone: "America/Montevideo ( UTC-03:00 )",
    timeDifferent: " UTC-03:00",
    name: "Montevideo",
  },
  {
    timeZone: "America/Bahia ( UTC-03:00 )",
    timeDifferent: " UTC-03:00",
    name: "Salvador",
  },
  {
    timeZone: "America/Santiago ( UTC-03:00 )",
    timeDifferent: " UTC-03:00",
    name: "Santiago",
  },
  {
    timeZone: "America/Noronha ( UTC-02:00 )",
    timeDifferent: " UTC-02:00",
    name: "Mid-Atlantic",
  },
  {
    timeZone: "Atlantic/Azores ( UTC+00:00 )",
    timeDifferent: " UTC+00:00",
    name: "Azores",
  },
  {
    timeZone: "Atlantic/Cape_Verde ( UTC-01:00 )",
    timeDifferent: " UTC-01:00",
    name: "Cape Verde Islands",
  },
  {
    timeZone: "Europe/London ( UTC+01:00 )",
    timeDifferent: " UTC+01:00",
    name: "Dublin",
  },
  {
    timeZone: "Africa/Casablanca ( UTC+01:00 )",
    timeDifferent: " UTC+01:00",
    name: "Casablanca",
  },
  {
    timeZone: "Africa/Monrovia ( UTC+00:00 )",
    timeDifferent: " UTC+00:00",
    name: "Monrovia",
  },
  {
    timeZone: "Europe/Amsterdam ( UTC+02:00 )",
    timeDifferent: " UTC+02:00",
    name: "Amsterdam",
  },
  {
    timeZone: "Europe/Belgrade ( UTC+02:00 )",
    timeDifferent: " UTC+02:00",
    name: "Belgrade",
  },
  {
    timeZone: "Europe/Brussels ( UTC+02:00 )",
    timeDifferent: " UTC+02:00",
    name: "Brussels",
  },
  {
    timeZone: "Europe/Warsaw ( UTC+02:00 )",
    timeDifferent: " UTC+02:00",
    name: "Sarajevo",
  },
  {
    timeZone: "Africa/Algiers ( UTC+01:00 )",
    timeDifferent: " UTC+01:00",
    name: "West Central Africa",
  },
  {
    timeZone: "Africa/Windhoek ( UTC+02:00 )",
    timeDifferent: " UTC+02:00",
    name: "Windhoek",
  },
  {
    timeZone: "Europe/Athens ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Athens",
  },
  {
    timeZone: "Asia/Beirut ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Beirut",
  },
  {
    timeZone: "Africa/Cairo ( UTC+02:00 )",
    timeDifferent: " UTC+02:00",
    name: "Cairo",
  },
  {
    timeZone: "Asia/Damascus ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Damascus",
  },
  {
    timeZone: "EET ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Eastern Europe",
  },
  {
    timeZone: "Africa/Harare ( UTC+02:00 )",
    timeDifferent: " UTC+02:00",
    name: "Harare",
  },
  {
    timeZone: "Europe/Helsinki ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Helsinki",
  },
  {
    timeZone: "Asia/Istanbul ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Istanbul",
  },
  {
    timeZone: "Asia/Jerusalem ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Jerusalem",
  },
  {
    timeZone: "Europe/Kaliningrad ( UTC+02:00 )",
    timeDifferent: " UTC+02:00",
    name: "Kaliningrad",
  },
  {
    timeZone: "Africa/Tripoli ( UTC+02:00 )",
    timeDifferent: " UTC+02:00",
    name: "Tripoli",
  },
  {
    timeZone: "Asia/Amman ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Amman",
  },
  {
    timeZone: "Asia/Baghdad ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Baghdad",
  },
  {
    timeZone: "Asia/Kuwait ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Kuwait",
  },
  {
    timeZone: "Europe/Minsk ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Minsk",
  },
  {
    timeZone: "Europe/Moscow ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Moscow",
  },
  {
    timeZone: "Africa/Nairobi ( UTC+03:00 )",
    timeDifferent: " UTC+03:00",
    name: "Nairobi",
  },
  {
    timeZone: "Asia/Tehran ( UTC+03:30 )",
    timeDifferent: " UTC+03:30",
    name: "Tehran",
  },
  {
    timeZone: "Asia/Muscat ( UTC+04:00 )",
    timeDifferent: " UTC+04:00",
    name: "Abu Dhabi",
  },
  {
    timeZone: "Asia/Baku ( UTC+05:00 )",
    timeDifferent: " UTC+05:00",
    name: "Baku",
  },
  {
    timeZone: "Europe/Samara ( UTC+04:00 )",
    timeDifferent: " UTC+04:00",
    name: "Izhevsk",
  },
  {
    timeZone: "Indian/Mauritius ( UTC+04:00 )",
    timeDifferent: " UTC+04:00",
    name: "Port Louis",
  },
  {
    timeZone: "Asia/Tbilisi ( UTC+04:00 )",
    timeDifferent: " UTC+04:00",
    name: "Tbilisi",
  },
  {
    timeZone: "Asia/Yerevan ( UTC+04:00 )",
    timeDifferent: " UTC+04:00",
    name: "Yerevan",
  },
  {
    timeZone: "Asia/Kabul ( UTC+04:30 )",
    timeDifferent: " UTC+04:30",
    name: "Kabul",
  },
  {
    timeZone: "Asia/Tashkent ( UTC+05:00 )",
    timeDifferent: " UTC+05:00",
    name: "Tashkent",
  },
  {
    timeZone: "Asia/Yekaterinburg ( UTC+05:00 )",
    timeDifferent: " UTC+05:00",
    name: "Ekaterinburg",
  },
  {
    timeZone: "Asia/Karachi ( UTC+05:00 )",
    timeDifferent: " UTC+05:00",
    name: "Islamabad",
  },
  {
    timeZone: "Asia/Kolkata ( UTC+05:30 )",
    timeDifferent: " UTC+05:30",
    name: "Chennai",
  },
  {
    timeZone: "Asia/Colombo ( UTC+05:30 )",
    timeDifferent: " UTC+05:30",
    name: "Sri Jayawardenepura",
  },
  {
    timeZone: "Asia/Katmandu ( UTC+05:45 )",
    timeDifferent: " UTC+05:45",
    name: "Kathmandu",
  },
  {
    timeZone: "Asia/Almaty ( UTC+06:00 )",
    timeDifferent: " UTC+06:00",
    name: "Astana",
  },
  {
    timeZone: "Asia/Dhaka ( UTC+06:00 )",
    timeDifferent: " UTC+06:00",
    name: "Dhaka",
  },
  {
    timeZone: "Asia/Novosibirsk ( UTC+06:00 )",
    timeDifferent: " UTC+06:00",
    name: "Novosibirsk",
  },
  {
    timeZone: "Asia/Rangoon ( UTC+06:30 )",
    timeDifferent: " UTC+06:30",
    name: "Yangon Rangoon)",
  },
  {
    timeZone: "Asia/Bangkok ( UTC+07:00 )",
    timeDifferent: " UTC+07:00",
    name: "Bangkok",
  },
  {
    timeZone: "Asia/Krasnoyarsk ( UTC+07:00 )",
    timeDifferent: " UTC+07:00",
    name: "Krasnoyarsk",
  },
  {
    timeZone: "Asia/Chongqing ( UTC+08:00 )",
    timeDifferent: " UTC+08:00",
    name: "Beijing",
  },
  {
    timeZone: "Asia/Irkutsk ( UTC+08:00 )",
    timeDifferent: " UTC+08:00",
    name: "Irkutsk",
  },
  {
    timeZone: "Asia/Kuala_Lumpur ( UTC+08:00 )",
    timeDifferent: " UTC+08:00",
    name: "Kuala Lumpur",
  },
  {
    timeZone: "Australia/Perth ( UTC+08:00 )",
    timeDifferent: " UTC+08:00",
    name: "Perth",
  },
  {
    timeZone: "Asia/Taipei ( UTC+08:00 )",
    timeDifferent: " UTC+08:00",
    name: "Taipei",
  },
  {
    timeZone: "Asia/Ulaanbaatar ( UTC+08:00 )",
    timeDifferent: " UTC+08:00",
    name: "Ulaanbaatar",
  },
  {
    timeZone: "Asia/Tokyo ( UTC+09:00 )",
    timeDifferent: " UTC+09:00",
    name: "Osaka",
  },
  {
    timeZone: "Asia/Seoul ( UTC+09:00 )",
    timeDifferent: " UTC+09:00",
    name: "Seoul",
  },
  {
    timeZone: "Asia/Yakutsk ( UTC+09:00 )",
    timeDifferent: " UTC+09:00",
    name: "Yakutsk",
  },
  {
    timeZone: "Australia/Adelaide ( UTC+10:30 )",
    timeDifferent: " UTC+10:30",
    name: "Adelaide",
  },
  {
    timeZone: "Australia/Darwin ( UTC+09:30 )",
    timeDifferent: " UTC+09:30",
    name: "Darwin",
  },
  {
    timeZone: "Australia/Brisbane ( UTC+10:00 )",
    timeDifferent: " UTC+10:00",
    name: "Brisbane",
  },
  {
    timeZone: "Australia/Canberra ( UTC+11:00 )",
    timeDifferent: " UTC+11:00",
    name: "Canberra",
  },
  {
    timeZone: "Pacific/Guam ( UTC+10:00 )",
    timeDifferent: " UTC+10:00",
    name: "Guam",
  },
  {
    timeZone: "Australia/Hobart ( UTC+11:00 )",
    timeDifferent: " UTC+11:00",
    name: "Hobart",
  },
  {
    timeZone: "Asia/Magadan ( UTC+10:00 )",
    timeDifferent: " UTC+10:00",
    name: "Magadan",
  },
  {
    timeZone: "Asia/Vladivostok ( UTC+10:00 )",
    timeDifferent: " UTC+10:00",
    name: "Vladivostok",
  },
  {
    timeZone: "Asia/Srednekolymsk ( UTC+11:00 )",
    timeDifferent: " UTC+11:00",
    name: "Chokirdakh",
  },
  {
    timeZone: "Pacific/Guadalcanal ( UTC+11:00 )",
    timeDifferent: " UTC+11:00",
    name: "Solomon Islands",
  },
  {
    timeZone: "Asia/Anadyr ( UTC+12:00 )",
    timeDifferent: " UTC+12:00",
    name: "Anadyr",
  },
  {
    timeZone: "Pacific/Auckland ( UTC+13:00 )",
    timeDifferent: " UTC+13:00",
    name: "Auckland",
  },
  {
    timeZone: "Pacific/Fiji ( UTC+12:00 )",
    timeDifferent: " UTC+12:00",
    name: "Fiji Islands",
  },
  {
    timeZone: "Pacific/Tongatapu ( UTC+13:00 )",
    timeDifferent: " UTC+13:00",
    name: "Nuku'alofa",
  },
  {
    timeZone: "Pacific/Apia ( UTC+14:00 )",
    timeDifferent: " UTC+14:00",
    name: "Samoa",
  },
];

const packageList = [
  {
    planName: "PREMIUM",
    monthlyPrice: 29,
    description:
      "Ideal for Companies who need advanced features with more Users.",
    features: [
      "10 Users",
      "$3 Per Additional User",
      "Custom Form Builder",
      "Unlimited Forms",
      "Unlimited Workflows",
      "Unlimited Calendars",
      "Unlimited Lists",
      "Full Access to Workflow Template Library",
      "Workflows Automation",
      "Workflow Permission Handling",
      "Goal Settings",
      "Reports",
      "KPIscore AI Assistant ",
      "50 GB Cloud Storage",
    ],
    defaultUserCount: 10,
    perAdditionalUser: 3,
    discount: 0,
    storage: 50,
    packageNumber: 1,
    createdBy: "65aa263b74458ed8827dea42",
  },
  {
    planName: "FREE TRIAL",
    monthlyPrice: 0,
    description: "Start your 30 days free trial*",
    features: [
      "5 Users",
      "Valid 30 Days",
      "Custom Form Builder",
      "Unlimited Forms",
      "Unlimited Workflows",
      "Unlimited Calendars",
      "Unlimited Lists",
      "Workflows Automation",
      "Workflow Permission Handling",
      "Goal Settings",
      "Reports",
      "Access to Workflow Template Library",
    ],
    defaultUserCount: 5,
    discount: 0,
    packageNumber: 3,
    createdBy: "65aa263b74458ed8827dea42",
  },
  {
    planName: "ENTERPRISE",
    monthlyPrice: 0,
    description:
      "Tailor-made packages for organizations with large number of users who needs full solution.",
    features: [
      "Request Custom User Count",
      "Priority Customer Support",
      "Custom Form Builder",
      "Unlimited Forms",
      "Unlimited Workflows",
      "Unlimited Calendars",
      "Unlimited Lists",
      "Full Access to Workflow Template Library",
      "Workflows Automation",
      "Workflow Permission Handling",
      "Goal Settings",
      "Reports",
      "KPIscore AI Assistant ",
      "Custom Cloud Storage Capacity",
    ],
    defaultUserCount: 5,
    discount: 0,
    packageNumber: 2,
    createdBy: "65aa263b74458ed8827dea42",
  },
];

const countryList = [
  { country: "Afghanistan", code: "AF" },
  { country: "Åland Islands", code: "AX" },
  { country: "Albania", code: "AL" },
  { country: "Algeria", code: "DZ" },
  { country: "American Samoa", code: "AS" },
  { country: "AndorrA", code: "AD" },
  { country: "Angola", code: "AO" },
  { country: "Anguilla", code: "AI" },
  { country: "Antarctica", code: "AQ" },
  { country: "Antigua and Barbuda", code: "AG" },
  { country: "Argentina", code: "AR" },
  { country: "Armenia", code: "AM" },
  { country: "Aruba", code: "AW" },
  { country: "Australia", code: "AU" },
  { country: "Austria", code: "AT" },
  { country: "Azerbaijan", code: "AZ" },
  { country: "Bahamas", code: "BS" },
  { country: "Bahrain", code: "BH" },
  { country: "Bangladesh", code: "BD" },
  { country: "Barbados", code: "BB" },
  { country: "Belarus", code: "BY" },
  { country: "Belgium", code: "BE" },
  { country: "Belize", code: "BZ" },
  { country: "Benin", code: "BJ" },
  { country: "Bermuda", code: "BM" },
  { country: "Bhutan", code: "BT" },
  { country: "Bolivia", code: "BO" },
  { country: "Bosnia and Herzegovina", code: "BA" },
  { country: "Botswana", code: "BW" },
  { country: "Bouvet Island", code: "BV" },
  { country: "Brazil", code: "BR" },
  { country: "British Indian Ocean Territory", code: "IO" },
  { country: "Brunei Darussalam", code: "BN" },
  { country: "Bulgaria", code: "BG" },
  { country: "Burkina Faso", code: "BF" },
  { country: "Burundi", code: "BI" },
  { country: "Cambodia", code: "KH" },
  { country: "Cameroon", code: "CM" },
  { country: "Canada", code: "CA" },
  { country: "Cape Verde", code: "CV" },
  { country: "Cayman Islands", code: "KY" },
  { country: "Central African Republic", code: "CF" },
  { country: "Chad", code: "TD" },
  { country: "Chile", code: "CL" },
  { country: "China", code: "CN" },
  { country: "Christmas Island", code: "CX" },
  { country: "Cocos (Keeling) Islands", code: "CC" },
  { country: "Colombia", code: "CO" },
  { country: "Comoros", code: "KM" },
  { country: "Congo", code: "CG" },
  { country: "Congo, The Democratic Republic of the", code: "CD" },
  { country: "Cook Islands", code: "CK" },
  { country: "Costa Rica", code: "CR" },
  { country: "Cote D'Ivoire", code: "CI" },
  { country: "Croatia", code: "HR" },
  { country: "Cuba", code: "CU" },
  { country: "Cyprus", code: "CY" },
  { country: "Czech Republic", code: "CZ" },
  { country: "Denmark", code: "DK" },
  { country: "Djibouti", code: "DJ" },
  { country: "Dominica", code: "DM" },
  { country: "Dominican Republic", code: "DO" },
  { country: "Ecuador", code: "EC" },
  { country: "Egypt", code: "EG" },
  { country: "El Salvador", code: "SV" },
  { country: "Equatorial Guinea", code: "GQ" },
  { country: "Eritrea", code: "ER" },
  { country: "Estonia", code: "EE" },
  { country: "Ethiopia", code: "ET" },
  { country: "Falkland Islands (Malvinas)", code: "FK" },
  { country: "Faroe Islands", code: "FO" },
  { country: "Fiji", code: "FJ" },
  { country: "Finland", code: "FI" },
  { country: "France", code: "FR" },
  { country: "French Guiana", code: "GF" },
  { country: "French Polynesia", code: "PF" },
  { country: "French Southern Territories", code: "TF" },
  { country: "Gabon", code: "GA" },
  { country: "Gambia", code: "GM" },
  { country: "Georgia", code: "GE" },
  { country: "Germany", code: "DE" },
  { country: "Ghana", code: "GH" },
  { country: "Gibraltar", code: "GI" },
  { country: "Greece", code: "GR" },
  { country: "Greenland", code: "GL" },
  { country: "Grenada", code: "GD" },
  { country: "Guadeloupe", code: "GP" },
  { country: "Guam", code: "GU" },
  { country: "Guatemala", code: "GT" },
  { country: "Guernsey", code: "GG" },
  { country: "Guinea", code: "GN" },
  { country: "Guinea-Bissau", code: "GW" },
  { country: "Guyana", code: "GY" },
  { country: "Haiti", code: "HT" },
  { country: "Heard Island and Mcdonald Islands", code: "HM" },
  { country: "Holy See (Vatican City State)", code: "VA" },
  { country: "Honduras", code: "HN" },
  { country: "Hong Kong", code: "HK" },
  { country: "Hungary", code: "HU" },
  { country: "Iceland", code: "IS" },
  { country: "India", code: "IN" },
  { country: "Indonesia", code: "ID" },
  { country: "Iran, Islamic Republic Of", code: "IR" },
  { country: "Iraq", code: "IQ" },
  { country: "Ireland", code: "IE" },
  { country: "Isle of Man", code: "IM" },
  { country: "Israel", code: "IL" },
  { country: "Italy", code: "IT" },
  { country: "Jamaica", code: "JM" },
  { country: "Japan", code: "JP" },
  { country: "Jersey", code: "JE" },
  { country: "Jordan", code: "JO" },
  { country: "Kazakhstan", code: "KZ" },
  { country: "Kenya", code: "KE" },
  { country: "Kiribati", code: "KI" },
  { country: "Korea, Democratic People'S Republic of", code: "KP" },
  { country: "Korea, Republic of", code: "KR" },
  { country: "Kuwait", code: "KW" },
  { country: "Kyrgyzstan", code: "KG" },
  { country: "Lao People'S Democratic Republic", code: "LA" },
  { country: "Latvia", code: "LV" },
  { country: "Lebanon", code: "LB" },
  { country: "Lesotho", code: "LS" },
  { country: "Liberia", code: "LR" },
  { country: "Libyan Arab Jamahiriya", code: "LY" },
  { country: "Liechtenstein", code: "LI" },
  { country: "Lithuania", code: "LT" },
  { country: "Luxembourg", code: "LU" },
  { country: "Macao", code: "MO" },
  { country: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { country: "Madagascar", code: "MG" },
  { country: "Malawi", code: "MW" },
  { country: "Malaysia", code: "MY" },
  { country: "Maldives", code: "MV" },
  { country: "Mali", code: "ML" },
  { country: "Malta", code: "MT" },
  { country: "Marshall Islands", code: "MH" },
  { country: "Martinique", code: "MQ" },
  { country: "Mauritania", code: "MR" },
  { country: "Mauritius", code: "MU" },
  { country: "Mayotte", code: "YT" },
  { country: "Mexico", code: "MX" },
  { country: "Micronesia, Federated States of", code: "FM" },
  { country: "Moldova, Republic of", code: "MD" },
  { country: "Monaco", code: "MC" },
  { country: "Mongolia", code: "MN" },
  { country: "Montserrat", code: "MS" },
  { country: "Morocco", code: "MA" },
  { country: "Mozambique", code: "MZ" },
  { country: "Myanmar", code: "MM" },
  { country: "Namibia", code: "NA" },
  { country: "Nauru", code: "NR" },
  { country: "Nepal", code: "NP" },
  { country: "Netherlands", code: "NL" },
  { country: "Netherlands Antilles", code: "AN" },
  { country: "New Caledonia", code: "NC" },
  { country: "New Zealand", code: "NZ" },
  { country: "Nicaragua", code: "NI" },
  { country: "Niger", code: "NE" },
  { country: "Nigeria", code: "NG" },
  { country: "Niue", code: "NU" },
  { country: "Norfolk Island", code: "NF" },
  { country: "Northern Mariana Islands", code: "MP" },
  { country: "Norway", code: "NO" },
  { country: "Oman", code: "OM" },
  { country: "Pakistan", code: "PK" },
  { country: "Palau", code: "PW" },
  { country: "Palestinian Territory, Occupied", code: "PS" },
  { country: "Panama", code: "PA" },
  { country: "Papua New Guinea", code: "PG" },
  { country: "Paraguay", code: "PY" },
  { country: "Peru", code: "PE" },
  { country: "Philippines", code: "PH" },
  { country: "Pitcairn", code: "PN" },
  { country: "Poland", code: "PL" },
  { country: "Portugal", code: "PT" },
  { country: "Puerto Rico", code: "PR" },
  { country: "Qatar", code: "QA" },
  { country: "Reunion", code: "RE" },
  { country: "Romania", code: "RO" },
  { country: "Russian Federation", code: "RU" },
  { country: "RWANDA", code: "RW" },
  { country: "Saint Helena", code: "SH" },
  { country: "Saint Kitts and Nevis", code: "KN" },
  { country: "Saint Lucia", code: "LC" },
  { country: "Saint Pierre and Miquelon", code: "PM" },
  { country: "Saint Vincent and the Grenadines", code: "VC" },
  { country: "Samoa", code: "WS" },
  { country: "San Marino", code: "SM" },
  { country: "Sao Tome and Principe", code: "ST" },
  { country: "Saudi Arabia", code: "SA" },
  { country: "Senegal", code: "SN" },
  { country: "Serbia and Montenegro", code: "CS" },
  { country: "Seychelles", code: "SC" },
  { country: "Sierra Leone", code: "SL" },
  { country: "Singapore", code: "SG" },
  { country: "Slovakia", code: "SK" },
  { country: "Slovenia", code: "SI" },
  { country: "Solomon Islands", code: "SB" },
  { country: "Somalia", code: "SO" },
  { country: "South Africa", code: "ZA" },
  { country: "South Georgia and the South Sandwich Islands", code: "GS" },
  { country: "Spain", code: "ES" },
  { country: "Sri Lanka", code: "LK" },
  { country: "Sudan", code: "SD" },
  { country: "Suricountry", code: "SR" },
  { country: "Svalbard and Jan Mayen", code: "SJ" },
  { country: "Swaziland", code: "SZ" },
  { country: "Sweden", code: "SE" },
  { country: "Switzerland", code: "CH" },
  { country: "Syrian Arab Republic", code: "SY" },
  { country: "Taiwan, Province of China", code: "TW" },
  { country: "Tajikistan", code: "TJ" },
  { country: "Tanzania, United Republic of", code: "TZ" },
  { country: "Thailand", code: "TH" },
  { country: "Timor-Leste", code: "TL" },
  { country: "Togo", code: "TG" },
  { country: "Tokelau", code: "TK" },
  { country: "Tonga", code: "TO" },
  { country: "Trinidad and Tobago", code: "TT" },
  { country: "Tunisia", code: "TN" },
  { country: "Turkey", code: "TR" },
  { country: "Turkmenistan", code: "TM" },
  { country: "Turks and Caicos Islands", code: "TC" },
  { country: "Tuvalu", code: "TV" },
  { country: "Uganda", code: "UG" },
  { country: "Ukraine", code: "UA" },
  { country: "United Arab Emirates", code: "AE" },
  { country: "United Kingdom", code: "GB" },
  { country: "United States", code: "US" },
  { country: "United States Minor Outlying Islands", code: "UM" },
  { country: "Uruguay", code: "UY" },
  { country: "Uzbekistan", code: "UZ" },
  { country: "Vanuatu", code: "VU" },
  { country: "Venezuela", code: "VE" },
  { country: "Viet Nam", code: "VN" },
  { country: "Virgin Islands, British", code: "VG" },
  { country: "Virgin Islands, U.S.", code: "VI" },
  { country: "Wallis and Futuna", code: "WF" },
  { country: "Western Sahara", code: "EH" },
  { country: "Yemen", code: "YE" },
  { country: "Zambia", code: "ZM" },
  { country: "Zimbabwe", code: "ZW" },
];

const profileColorList = [
  { colorId: 1, profileColor: "#CA7CF9" },
  { colorId: 2, profileColor: "#63D6AC" },
  { colorId: 3, profileColor: "#EC8C63" },
  { colorId: 4, profileColor: "#2E75FF" },
  { colorId: 5, profileColor: "#909DAD" },
  { colorId: 6, profileColor: "#97E34C" },
  { colorId: 7, profileColor: "#F083AA" },
  { colorId: 8, profileColor: "#ECCE63" },
];

const workspaceColorList = [
  { colorId: 1, workspaceColor: "#CA7CF9" },
  { colorId: 2, workspaceColor: "#63D6AC" },
  { colorId: 3, workspaceColor: "#EC8C63" },
  { colorId: 4, workspaceColor: "#2E75FF" },
  { colorId: 5, workspaceColor: "#909DAD" },
  { colorId: 6, workspaceColor: "#97E34C" },
  { colorId: 7, workspaceColor: "#F083AA" },
  { colorId: 8, workspaceColor: "#ECCE63" },
];

const widgetColorList = [
  { colorId: 1, widgetColor: "#CA7CF9" },
  { colorId: 2, widgetColor: "#63D6AC" },
  { colorId: 3, widgetColor: "#EC8C63" },
  { colorId: 4, widgetColor: "#2E75FF" },
  { colorId: 5, widgetColor: "#909DAD" },
  { colorId: 6, widgetColor: "#97E34C" },
  { colorId: 7, widgetColor: "#F083AA" },
  { colorId: 8, widgetColor: "#ECCE63" },
];

const unitList = [
  // Length
  { unit: "m" },     // meter
  { unit: "km" },    // kilometer
  
  // Mass
  { unit: "g" },     // gram
  { unit: "kg" },    // kilogram
  
  // Volume
  { unit: "L" },     // liter
  { unit: "mL" },    // milliliter
  
  // Temperature
  { unit: "C" },     // Celsius
  { unit: "F" },     // Fahrenheit
  { unit: "K" },     // Kelvin
  
  // Time
  { unit: "s" },     // second
  { unit: "min" },   // minute
  { unit: "h" },     // hour
  
  // // Speed
  // { unit: "m/s" },   // meters per second
  // { unit: "km/h" },  // kilometers per hour
  // { unit: "mph" },   // miles per hour
  
  // // Area
  // { unit: "m^2" },   // square meter
  // { unit: "cm^2" },  // square centimeter
  // { unit: "ft^2" },  // square foot
  // { unit: "in^2" },  // square inch
  // { unit: "acre" },  // acre
  
  // // Energy
  // { unit: "J" },     // joule
  // { unit: "kJ" },    // kilojoule
  // { unit: "cal" },   // calorie
  // { unit: "kcal" },  // kilocalorie
  // { unit: "Wh" },    // watt-hour
  // { unit: "kWh" },   // kilowatt-hour
  
  // // Pressure
  // { unit: "Pa" },    // pascal
  // { unit: "kPa" },   // kilopascal
  // { unit: "bar" },   // bar
  // { unit: "psi" },   // pounds per square inch
  
  // // Frequency
  // { unit: "Hz" },    // hertz
  // { unit: "kHz" },   // kilohertz
  // { unit: "MHz" },   // megahertz
  // { unit: "GHz" },   // gigahertz
  
  // // Data Storage
  // { unit: "bit" },   // bit
  // { unit: "byte" },  // byte
  // { unit: "KB" },    // kilobyte
  // { unit: "MB" },    // megabyte
  // { unit: "GB" },    // gigabyte
  // { unit: "TB" },    // terabyte
  
  // // Power
  // { unit: "W" },     // watt
  // { unit: "kW" },    // kilowatt
  
  // Currency 
  { unit: "USD" },   // US Dollar
  { unit: "EUR" },   // Euro
  { unit: "JPY" },   // Japanese Yen
  { unit: "GBP" },   // British Pound
];


export {
  timeZoneList,
  countryList,
  packageList,
  profileColorList,
  workspaceColorList,
  widgetColorList,
  unitList
 };