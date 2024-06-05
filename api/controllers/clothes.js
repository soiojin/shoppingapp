import Clothes from "../models/Clothes.js";

export const createClothes = async (req, res, next) => {
    const newClothes = new Clothes(req.body);

    try {
        const savedClothes = await newClothes.save();
        res.status(200).json(savedClothes);
    } catch (err) {
        next (err);
    }
};

export const updateClothes = async (req, res, next) => {
    try {
        const updateClothes = await Clothes.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateClothes);
    } catch (err) {
        next(err);
    }
};

export const deleteClothes = async (req, res, next) => {
    try {
        await Clothes.findByIdAndDelete(req.params.id);
        res.status(200).json("Clothes has been deleted.");
    } catch (err) {
        next (err);
    }
};

export const getClothes = async (req, res, next) => {
    try {
        const clothes = await Clothes.findById(req.params.id);
        res.status(200).json(clothes);
    } catch (err){
        next(err);
    }
};

export const getClothess = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const clothess = await Clothes.find({
            ...others,
            price: { $gt: min | 1, $lt: max || 1000000 },
        }).limit(req.query.limit);
        res.status(200).json(clothess);
    } catch (err) {
        next (err);
    }
};

export const countByType = async (req, res, next) => {
    try {
        const outerwearCount = await Clothes.countDocuments({ type: "outerwear" });
        const topCount = await Clothes.countDocuments({ type: "top" });
        const bottomCount = await Clothes.countDocuments({ type: "bottom" });
        const dressCount = await Clothes.countDocuments({ type: "dress" });
        const bagCount = await Clothes.countDocuments({ type: "bag" });
        const accessoriesCount = await Clothes.countDocuments({ type: "accessories" });
        
        res.status(200).json([
            { type: "outerwear", count: outerwearCount },
            { type: "top", count: topCount },
            { type: "bottom", count: bottomCount },
            { type: "dress", count: dressCount },
            { type: "bag", count: bagCount },
            { type: "accesories", count: accessoriesCount},
        ]);
    } catch (err) {
        next (err);
    }
}
