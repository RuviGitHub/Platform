import PlatformCountry from "../models/PlatformCountry.js";
import PlatformPackage from "../models/PlatformPackage.js";
import PlatformTimeZone from "../models/PlatformTimeZone.js";
import ProfileColor from "../models/ProfileColor.js";
import WorkspaceColor from "../models/WorkspaceColor.js";

class MetaDataRepository {
  async getMetaDataRepository() {
    try {
      const timeZones = await PlatformTimeZone.find({ isActive: true });
      const profileColors = await ProfileColor.find({ isActive: true });
      const workspaceColors = await WorkspaceColor.find({ isActive: true });
      const countries = await PlatformCountry.find({ isActive: true });
      if (
        timeZones.length != 0 &&
        profileColors.length != 0 &&
        workspaceColors.length != 0 &&
        countries.length != 0
      ) {
        return {
          success: true,
          message: "Meta data fetched.",
          data: {
            timeZones: timeZones,
            profileColors: profileColors,
            workspaceColors: workspaceColors,
            countries: countries,
          },
        };
      } else {
        return {
          success: false,
          message: "Meta data fetch error.",
          data: {
            timeZones: timeZones,
            profileColors: profileColors,
            workspaceColors: workspaceColors,
            countries: countries,
          },
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async getPackagesRepository() {
    try {
      const packages = await PlatformPackage.find({ isActive: true });
      if (packages) {
        return {
          success: true,
          message: "Packages fetched.",
          data: packages,
        };
      } else {
        return {
          success: false,
          message: "No Packages fetched.",
          data: null,
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  /* ------------------------- Helper Methods ------------------------- */
  async getPackagesById(packageId) {
    try {
      const packageDetails = await PlatformPackage.findOne({ _id: packageId });
      return packageDetails;
    } catch (error) {
      return null;
    }
  }
}

export default MetaDataRepository;
