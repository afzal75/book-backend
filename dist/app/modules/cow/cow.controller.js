"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendApiResponse_1 = __importDefault(require("../../../shared/sendApiResponse"));
const http_status_1 = __importDefault(require("http-status"));
const cow_service_1 = require("./cow.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const cow_constance_1 = require("./cow.constance");
const pagination_1 = require("../../../constants/pagination");
// create a cow
const createCow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    {
        const cowData = __rest(req.body, []);
        const result = yield cow_service_1.CowService.createCow(cowData);
        (0, sendApiResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Cow Created Successfully",
            data: result,
        });
        //   next();
    }
}));
// Get ALL Cows
const getAllCows = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, cow_constance_1.cowFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield cow_service_1.CowService.getAllCows(filters, paginationOptions);
    (0, sendApiResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Cow retrieved successfully !",
        meta: result.meta,
        data: result.data,
    });
}));
//  Get Single Cow
const getSingleCow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield cow_service_1.CowService.getSingleCow(id);
    (0, sendApiResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Cow retrieved successfully !",
        data: result,
    });
}));
// update cow
const updatedCow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield cow_service_1.CowService.updatedCow(id, updatedData);
    (0, sendApiResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Cow updated successfully !",
        data: result,
    });
}));
// Delete Cow
const deleteCow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield cow_service_1.CowService.deleteCow(id);
    (0, sendApiResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Cow deleted successfully !",
        data: result,
    });
}));
exports.CowController = {
    createCow,
    getAllCows,
    getSingleCow,
    updatedCow,
    deleteCow,
};
