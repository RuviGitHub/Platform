import { mongoose } from "mongoose";
import {
   timeZoneList,
   countryList,
   packageList,
   profileColorList,
   workspaceColorList,
   widgetColorList,
   unitList
} from "./initial-data.js";



import PlatformTimeZone from "../models/PlatformTimeZone.js";
import PlatformCountry from "../models/PlatformCountry.js";
import PlatformPackage from "../models/PlatformPackage.js";
import ProfileColor from "../models/ProfileColor.js";
import WorkspaceColor from "../models/WorkspaceColor.js";
import WidgetColor from "../models/WidgetColor.js";
import PlatformUnit from "../models/PlatformUnit.js";

async function seedInitialData() {
   try {
      const models = [
         { model: PlatformTimeZone, dataList: timeZoneList },
         { model: PlatformCountry, dataList: countryList },
         { model: PlatformPackage, dataList: packageList },
         { model: ProfileColor, dataList: profileColorList },
         { model: WorkspaceColor, dataList: workspaceColorList },
         { model: WidgetColor, dataList: widgetColorList },
         { model: PlatformUnit, dataList: unitList}
      ];

      for (const { model, dataList } of models) {
         const count = await model.countDocuments();
         if (count === 0) {
            console.log(
               `${model.modelName} model doesn't have existing data.So, Seeding data...`
            );
            await model.insertMany(dataList);
            console.log(`${model.modelName} data seeded successfully`);
         }
      }
   } catch (error) {
      console.error("Error seeding data:", error);
   }
}

export default seedInitialData;
