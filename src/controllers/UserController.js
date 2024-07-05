import validator from "validator";
import UserService from "../services/UserService.js";
import { successResponse, errorResponse } from "../utils/responseUtil.js";

const userService = new UserService();

class UserController {
  async verifyEmailController(req, res, next) {
    try {
      const email = req.query.email;

      // Check if email is provided
      if (!email) {
        const errorMessage = "Required fields are missing: email";
        return errorResponse(res, errorMessage, 400);
      }

      // Validate email format
      if (!validator.isEmail(email)) {
        const errorMessage = "Invalid email";
        return errorResponse(res, errorMessage, 400);
      }

      const dto = { email };

      const response = await userService.verifyEmailService(dto);
      // Check if response is successful
      if (response && response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

  async verifyOTPController(req, res, next) {
    try {
      const email = req.query.email;
      let otp = req.query.otp;

      // Check if email & otp is provided
      if (!email || !otp) {
        const missingFields = [];
        if (!email) missingFields.push("email");
        if (!otp) missingFields.push("otp");

        const errorMessage = `Required fields are missing: ${missingFields.join(
          ", "
        )}`;
        return errorResponse(res, errorMessage, 400);
      }

      // Validate email format
      if (!validator.isEmail(email)) {
        const errorMessage = "Invalid email";
        return errorResponse(res, errorMessage, 400);
      }

      if (!validator.isNumeric(otp)) {
        otp = parseInt(otp);
      }

      const dto = {
        email: email,
        otp: otp,
      };

      const response = await userService.verifyOTPService(dto);

      // Check if response is successful
      if (response && response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

  // async registerUserController(req, res, next) {
  //   try {
  //     const dto = req.body;
  //     const response = await userService.registerUserService(dto);

  //     // Check if response is successful
  //     if (response && response.success) {
  //       return successResponse(res, response.message, response.data);
  //     } else {
  //       return errorResponse(res, response.message, 500);
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  async loginController(req, res, next) {
    try {
      const dto = req.body;
      const response = await userService.loginService(dto);

      // Check if response is successful
      if (response && response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

  async resetPassowrdController(req, res, next) {
    try {
      const email = req.query.email;

      // Check if email is provided
      if (!email) {
        const errorMessage = "Required fields are missing: email";
        return errorResponse(res, errorMessage, 400);
      }

      // Validate email format
      if (!validator.isEmail(email)) {
        const errorMessage = "Invalid email";
        return errorResponse(res, errorMessage, 400);
      }

      const dto = { email };

      const response = await userService.resetPassowrdService(dto);
      // Check if response is successful
      if (response && response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

  async updatePassowrdController(req, res, next) {
    try {
      const dto = { 
        email: req.query.email,
        password: req.query.password
       };

      // Check if email is provided
      if (!dto.password) {
        const errorMessage = "Required fields are missing: password";
        return errorResponse(res, errorMessage, 400);
      }

      const response = await userService.updatePassowrdService(dto);
      // Check if response is successful
      if (response && response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {}
  }

  async authController(req, res, next) {
    try {
      const dto = req.query;
      const response = await userService.authService(dto);

      // Check if response is successful
      if (response && response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

  async inviteUserController(req, res, next) {
    try {
      const email = req.query.email;
      const role = parseInt(req.query.role);
      const workspaceId = req.query.workspaceId;

      // Check if email is provided
      if (!email && !role && !workspaceId) {
        const errorMessage = "Required fields are missing: email, role & workspaceId";
        return errorResponse(res, errorMessage, 400);
      }

      // Validate email format
      if (!validator.isEmail(email)) {
        const errorMessage = "Invalid email";
        return errorResponse(res, errorMessage, 400);
      }

      const dto = { email:email, role: role, workspaceId: workspaceId };

      const response = await userService.inviteUserService(dto);
      console.log(response)
      // Check if response is successful
      if (response && response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      console.log(error  )
      next(error);
    }
  }

  async getAllUsersPaginatedController(req, res, next) {
    try {
      const dto = {
        page: req.query.page,
        limit: req.query.limit,
        sort: req.query.sort,
        order: req.query.order,
        search: req.query.search,
        workspaceId: req.query.workspaceId
      };
      const response = await userService.getAllUsersPaginatedService(dto);
      if (response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

}

export default UserController;
