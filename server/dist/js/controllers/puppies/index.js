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
exports.deletePuppy = exports.updatePuppy = exports.handleAddPuppy = exports.getPuppies = void 0;
const puppy_1 = __importDefault(require("../../models/puppy"));
const getPuppies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const puppies = yield puppy_1.default.find();
        res.status(200).json({ puppies });
    }
    catch (error) {
        throw error;
    }
});
exports.getPuppies = getPuppies;
const handleAddPuppy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const body = req.body as Pick<IPuppy, "breed" | "name" | "dob">;
        console.warn("the request", req.body);
        const puppy = new puppy_1.default({
            _id: req.body.id,
            breed: req.body.breed,
            name: req.body.name,
            dob: req.body.dob,
        });
        // puppy.save();
        const newPuppy = yield puppy.save();
        console.log("after newPuppy");
        const allPuppies = yield puppy_1.default.find();
        console.log("after allPuppies");
        res
            .status(201)
            .json({ message: "Puppy added", puppy: newPuppy, puppies: allPuppies });
    }
    catch (error) {
        console.log("I am an Add error");
        throw error;
    }
});
exports.handleAddPuppy = handleAddPuppy;
const updatePuppy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        // const body = req.body
        // const id = req.params.id
        const updatePuppy = yield puppy_1.default.findByIdAndUpdate({
            _id: id,
        }, body);
        const allPuppies = yield puppy_1.default.find();
        res.status(200).json({
            message: "Puppy updated",
            puppy: updatePuppy,
            puppies: allPuppies,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updatePuppy = updatePuppy;
const deletePuppy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedPuppy = yield puppy_1.default.findByIdAndRemove(req.params.id);
        const allPuppies = yield puppy_1.default.find();
        res.status(200).json({
            message: "Puppy deleted",
            puppy: deletedPuppy,
            puppies: allPuppies,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deletePuppy = deletePuppy;
