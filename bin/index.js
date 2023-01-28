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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typesense_1 = __importDefault(require("typesense"));
const typesenseClient = new typesense_1.default.Client({
    nodes: [
        {
            host: 'typesense',
            port: 8108,
            protocol: 'http',
        },
    ],
    apiKey: 'password',
    numRetries: 3,
    connectionTimeoutSeconds: 10,
    logLevel: 'debug',
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        typesenseClient.collections('eric').delete();
    }
    catch (e) { }
}))();
