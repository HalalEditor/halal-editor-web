export interface OpenFoodProduct {
    allergens_tags:                                           string[];
    nutriscore_data?:                                         NutriscoreData;
    additives_debug_tags:                                     string[];
    ingredients_text_fr?:                                     string;
    last_check_dates_tags?:                                   string[];
    allergens_from_ingredients:                               string;
    last_checked_t?:                                          number;
    unique_scans_n:                                           number;
    correctors_tags:                                          string[];
    additives_original_tags:                                  string[];
    last_modified_by:                                         null | string;
    nutrition_grades_tags:                                    NutriscoreGrade[];
    images:                                                   Images;
    pnns_groups_2_tags:                                       PnnsGroups2_Tag[];
    complete:                                                 number;
    sortkey:                                                  number;
    image_thumb_url:                                          string;
    quantity:                                                 string;
    manufacturing_places?:                                    string;
    additives_n?:                                             number;
    nutrition_score_beverage:                                 number;
    packaging:                                                string;
    traces_tags:                                              string[];
    traces_hierarchy:                                         string[];
    nutrition_data?:                                          Checked;
    states_tags:                                              States[];
    pnns_groups_1_tags:                                       PnnsGroups1_Tag[];
    interface_version_modified:                               string;
    _id:                                                      string;
    data_quality_tags:                                        string[];
    obsolete_since_date?:                                     string;
    misc_tags:                                                MiscTag[];
    last_editor:                                              null | string;
    ingredients_text_with_allergens:                          string;
    image_ingredients_url:                                    string;
    nova_groups?:                                             number | string;
    image_ingredients_thumb_url:                              string;
    informers_tags:                                           string[];
    languages_hierarchy:                                      string[];
    ingredients_analysis_tags?:                               string[];
    countries_hierarchy:                                      string[];
    categories:                                               string;
    ingredients_text_debug_tags?:                             any[];
    environment_impact_level?:                                string;
    ingredients_from_palm_oil_n?:                             number;
    traces_from_ingredients:                                  TracesFromIngredients;
    allergens_lc?:                                            SLc;
    update_key:                                               UpdateKey;
    ingredients_ids_debug:                                    string[];
    no_nutrition_data?:                                       NoNutritionData | null;
    categories_lc:                                            SLc;
    nutriments:                                               Nutriments;
    data_quality_warnings_tags:                               string[];
    environment_impact_level_tags?:                           any[];
    lc:                                                       Lang;
    carbon_footprint_from_known_ingredients_debug?:           string;
    product_name_fr?:                                         string;
    checkers_tags:                                            string[];
    ingredients_original_tags:                                string[];
    nucleotides_prev_tags:                                    any[];
    additives_old_tags:                                       string[];
    emb_codes_20141016?:                                      string;
    pnns_groups_1:                                            PnnsGroups1;
    nutrient_levels:                                          NutrientLevels;
    amino_acids_tags:                                         any[];
    url:                                                      string;
    ingredients_tags:                                         string[];
    countries_tags:                                           string[];
    creator:                                                  string;
    pnns_groups_2:                                            PnnsGroups2;
    image_nutrition_url?:                                     string;
    amino_acids_prev_tags:                                    any[];
    image_nutrition_thumb_url?:                               string;
    brands:                                                   string;
    nucleotides_tags:                                         any[];
    packaging_tags:                                           string[];
    ingredients:                                              Ingredient[];
    emb_codes_orig?:                                          string;
    traces_from_user?:                                        string;
    ingredients_text_with_allergens_fr?:                      null | string;
    popularity_tags:                                          string[];
    ingredients_from_palm_oil_tags:                           string[];
    editors_tags:                                             string[];
    image_front_thumb_url:                                    string;
    ingredients_n_tags?:                                      string[];
    vitamins_tags:                                            string[];
    unknown_nutrients_tags:                                   string[];
    manufacturing_places_tags?:                               string[];
    nutrient_levels_tags:                                     NutrientLevelsTag[];
    product_name_debug_tags?:                                 any[];
    states:                                                   string;
    data_quality_errors_tags:                                 any[];
    generic_name_fr?:                                         string;
    ingredients_that_may_be_from_palm_oil_tags:               string[];
    last_image_t:                                             number;
    data_sources_tags?:                                       DataSourcesTag[];
    _keywords:                                                string[];
    additives_prev_original_tags:                             string[];
    origins_tags?:                                            string[];
    link?:                                                    string;
    obsolete?:                                                string;
    entry_dates_tags:                                         string[];
    ingredients_text:                                         string;
    image_url:                                                string;
    languages_tags:                                           string[];
    emb_codes_tags?:                                          any[];
    purchase_places_tags?:                                    string[];
    ingredients_hierarchy:                                    string[];
    lang:                                                     Lang;
    ingredients_text_debug:                                   null | string;
    other_nutritional_substances_prev_tags?:                  any[];
    codes_tags:                                               string[];
    code:                                                     string;
    ingredients_debug:                                        Array<null | string>;
    completeness:                                             number;
    data_quality_info_tags:                                   string[];
    id?:                                                      string;
    traces_lc?:                                               SLc;
    nutrition_data_per:                                       NutritionDataPPer;
    image_small_url:                                          string;
    cities_tags?:                                             any[];
    allergens_hierarchy:                                      string[];
    selected_images:                                          SelectedImages;
    rev:                                                      number | string;
    last_modified_t:                                          number;
    image_ingredients_small_url:                              string;
    countries_lc:                                             SLc;
    nutrition_grade_fr?:                                      NutriscoreGrade;
    brands_tags:                                              string[];
    nutrition_data_prepared?:                                 Checked;
    product_name:                                             string;
    additives_old_n?:                                         number;
    expiration_date?:                                         string;
    data_sources?:                                            string;
    editors?:                                                 string[];
    nutriscore_grade?:                                        NutriscoreGrade;
    nutrition_data_prepared_per:                              NutritionDataPPer;
    created_t:                                                number;
    categories_tags:                                          string[];
    allergens?:                                               string;
    nova_group?:                                              number | string;
    purchase_places?:                                         string;
    additives_tags:                                           string[];
    "fruits-vegetables-nuts_100g_estimate"?:                  number;
    generic_name?:                                            string;
    emb_codes?:                                               string;
    vitamins_prev_tags:                                       string[];
    scans_n:                                                  number;
    nutrition_score_debug:                                    string;
    nova_groups_tags?:                                        NovaGroupsTag[];
    languages_codes:                                          LanguagesCodes;
    interface_version_created?:                               string;
    image_front_url:                                          string;
    checked?:                                                 Checked;
    nutrition_grades?:                                        NutriscoreGrade;
    image_front_small_url:                                    string;
    last_edit_dates_tags:                                     string[];
    labels_tags?:                                             string[];
    origins?:                                                 Origins;
    nutriscore_score?:                                        number;
    data_quality_bugs_tags:                                   any[];
    categories_hierarchy:                                     string[];
    max_imgid:                                                number | string;
    labels_hierarchy?:                                        string[];
    traces?:                                                  string;
    photographers_tags:                                       string[];
    nova_group_debug:                                         string;
    unknown_ingredients_n:                                    number | string;
    ingredients_that_may_be_from_palm_oil_n?:                 number;
    serving_quantity?:                                        number | string;
    countries_beforescanbot?:                                 string;
    minerals_tags:                                            string[];
    carbon_footprint_percent_of_known_ingredients?:           number;
    last_image_dates_tags:                                    string[];
    languages:                                                { [key: string]: number };
    stores?:                                                  string;
    completed_t?:                                             number;
    stores_tags?:                                             string[];
    labels_lc?:                                               SLc;
    states_hierarchy:                                         States[];
    minerals_prev_tags:                                       string[];
    labels?:                                                  string;
    last_checker?:                                            string;
    debug_param_sorted_langs?:                                string[];
    allergens_from_user?:                                     string;
    countries:                                                string;
    ingredients_from_or_that_may_be_from_palm_oil_n:          number;
    other_nutritional_substances_tags:                        any[];
    image_nutrition_small_url?:                               string;
    serving_size?:                                            string;
    compared_to_category?:                                    string;
    ingredients_n?:                                           number;
    product_quantity?:                                        number | string;
    nutrition_score_warning_no_fruits_vegetables_nuts?:       number;
    nova_group_tags?:                                         NutriscoreGrade[];
    ingredients_text_en?:                                     string;
    generic_name_de?:                                         string;
    nutriscore_points?:                                       { [key: string]: number };
    origins_fr?:                                              string;
    ingredients_text_de?:                                     string;
    product_name_de?:                                         string;
    sources?:                                                 Source[];
    product_name_en?:                                         string;
    generic_name_en?:                                         string;
    ingredients_text_with_allergens_en?:                      string;
    ingredients_text_with_allergens_de?:                      string;
    nutrition_score_warning_no_fiber?:                        number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate?: number;
    labels_prev_hierarchy?:                                   string[];
    labels_prev_tags?:                                        string[];
    origins_debug_tags?:                                      any[];
    debug_tags?:                                              string[];
    new_additives_n?:                                         number;
    nutrition_data_prepared_per_debug_tags?:                  any[];
    expiration_date_debug_tags?:                              any[];
    generic_name_fr_debug_tags?:                              any[];
    allergens_debug_tags?:                                    any[];
    ingredients_text_with_allergens_it?:                      string;
    product_name_it?:                                         string;
    ingredients_text_it?:                                     string;
    generic_name_it?:                                         string;
    generic_name_de_debug_tags?:                              any[];
    ingredients_text_it_debug_tags?:                          any[];
    product_name_de_debug_tags?:                              any[];
    product_name_it_debug_tags?:                              any[];
    ingredients_text_de_debug_tags?:                          any[];
    generic_name_it_debug_tags?:                              any[];
    quantity_debug_tags?:                                     any[];
    generic_name_nl?:                                         string;
    ingredients_text_fr_debug_tags?:                          any[];
    lang_debug_tags?:                                         any[];
    traces_debug_tags?:                                       any[];
    ingredients_text_with_allergens_nl?:                      string;
    stores_debug_tags?:                                       any[];
    generic_name_nl_debug_tags?:                              any[];
    emb_codes_debug_tags?:                                    any[];
    product_name_nl_debug_tags?:                              any[];
    link_debug_tags?:                                         any[];
    brands_debug_tags?:                                       any[];
    manufacturing_places_debug_tags?:                         any[];
    product_name_fr_debug_tags?:                              any[];
    ingredients_text_nl?:                                     string;
    purchase_places_debug_tags?:                              any[];
    serving_size_debug_tags?:                                 any[];
    nutrition_data_per_debug_tags?:                           any[];
    ingredients_text_nl_debug_tags?:                          any[];
    product_name_nl?:                                         string;
    correctors?:                                              string[];
    checkers?:                                                any[];
    informers?:                                               string[];
    photographers?:                                           string[];
    labels_debug_tags?:                                       string[];
    product_name_es?:                                         string;
    ingredients_text_es?:                                     string;
    generic_name_es?:                                         string;
    ingredients_text_with_allergens_es?:                      string;
    ingredients_text_fr_ocr_1545132464?:                      string;
    ingredients_text_fr_ocr_1545132464_result?:               string;
    not_names_tags?:                                          string[];
    product_name_sl?:                                         string;
    product_name_sv?:                                         string;
    ingredients_text_sv?:                                     string;
    ingredients_text_fr_ocr_1541704223?:                      string;
    generic_name_sl?:                                         string;
    ingredients_text_fr_ocr_1541704223_result?:               string;
    ingredients_text_sl?:                                     string;
    ingredients_text_es_ocr_1560589846?:                      string;
    generic_name_sv?:                                         string;
    ingredients_text_with_allergens_sv?:                      string;
    ingredients_text_es_ocr_1560589846_result?:               string;
    additives_tags_n?:                                        null;
    generic_name_lc?:                                         string;
    ingredients_text_with_allergens_lc?:                      string;
    product_name_lc?:                                         string;
    ingredients_text_lc?:                                     string;
    ingredients_text_fr_ocr_1563215304?:                      string;
    ingredients_text_fr_ocr_1563215304_result?:               string;
    ingredients_text_de_ocr_1564846661_result?:               string;
    ingredients_text_de_ocr_1564846661?:                      string;
    packaging_debug_tags?:                                    any[];
    ingredients_text_xx?:                                     string;
    ingredients_text_xx_debug_tags?:                          any[];
    generic_name_xx_debug_tags?:                              any[];
    product_name_xx_debug_tags?:                              any[];
    generic_name_xx?:                                         string;
    product_name_xx?:                                         string;
    product_name_ro?:                                         string;
    ingredients_text_with_allergens_ro?:                      string;
    generic_name_ro?:                                         string;
    ingredients_text_ro?:                                     string;
    countries_debug_tags?:                                    any[];
    product_name_cs?:                                         string;
    ingredients_text_pl?:                                     string;
    product_name_bg?:                                         string;
    ingredients_text_with_allergens_cs?:                      string;
    generic_name_pl?:                                         string;
    product_name_pl?:                                         string;
    ingredients_text_pt?:                                     string;
    generic_name_pt?:                                         string;
    ingredients_text_cs?:                                     string;
    product_name_ru?:                                         string;
    product_name_pt?:                                         string;
    generic_name_bg?:                                         string;
    ingredients_text_with_allergens_bg?:                      string;
    ingredients_text_bg?:                                     string;
    ingredients_text_with_allergens_ru?:                      string;
    ingredients_text_ru?:                                     string;
    generic_name_cs?:                                         string;
    generic_name_ru?:                                         string;
    ingredients_text_with_allergens_pt?:                      string;
    ingredients_text_with_allergens_pl?:                      string;
}

export enum SLc {
    De = "de",
    En = "en",
    Es = "es",
    Fr = "fr",
}

export enum Checked {
    Empty = "",
    On = "on",
}

export enum DataSourcesTag {
    AppOff = "app-off",
    AppYuka = "app-yuka",
    Apps = "apps",
    DatabaseFoodrepoOpenfoodCh = "database-foodrepo-openfood-ch",
    Databases = "databases",
    ProducerFerrero = "producer-ferrero",
    Producers = "producers",
}

export interface Images {
    "36"?:           ChiangMaiGoose;
    "90"?:           EsbjergCougar;
    "132"?:          EsbjergCougar;
    "147"?:          EsbjergCougar;
    "124"?:          EsbjergCougar;
    "118"?:          EsbjergCougar;
    "58"?:           ChiangMaiGoose;
    "151"?:          EsbjergCougar;
    "23"?:           ChiangMaiGoose;
    "6"?:            ChiangMaiGoose;
    "53"?:           EsbjergCougar;
    "93"?:           EsbjergCougar;
    "149"?:          EsbjergCougar;
    "26"?:           ChiangMaiGoose;
    "10"?:           ChiangMaiGoose;
    "158"?:          EsbjergCougar;
    "14"?:           ChiangMaiGoose;
    "27"?:           ChiangMaiGoose;
    "123"?:          EsbjergCougar;
    "4"?:            ChiangMaiGoose;
    "95"?:           EsbjergCougar;
    "157"?:          EsbjergCougar;
    "38"?:           ChiangMaiGoose;
    "144"?:          EsbjergCougar;
    "99"?:           EsbjergCougar;
    front_fr?:       Front;
    "96"?:           EsbjergCougar;
    "44"?:           ChiangMaiGoose;
    ingredients_fr?: BasseTerreElephant;
    "108"?:          EsbjergCougar;
    "92"?:           EsbjergCougar;
    "126"?:          EsbjergCougar;
    "48"?:           ChiangMaiGoose;
    "31"?:           ChiangMaiGoose;
    "137"?:          EsbjergCougar;
    "116"?:          EsbjergCougar;
    "122"?:          EsbjergCougar;
    "57"?:           ChiangMaiGoose;
    "2":             ChiangMaiGoose;
    "24"?:           ChiangMaiGoose;
    "45"?:           ChiangMaiGoose;
    "127"?:          EsbjergCougar;
    "51"?:           ChiangMaiGoose;
    "111"?:          EsbjergCougar;
    "20"?:           ChiangMaiGoose;
    "94"?:           EsbjergCougar;
    "30"?:           ChiangMaiGoose;
    "146"?:          EsbjergCougar;
    "13"?:           ChiangMaiGoose;
    "143"?:          The141;
    "33"?:           ChiangMaiGoose;
    "133"?:          EsbjergCougar;
    "35"?:           ChiangMaiGoose;
    "50"?:           ChiangMaiGoose;
    "97"?:           EsbjergCougar;
    "142"?:          The141;
    "19"?:           ChiangMaiGoose;
    "138"?:          EsbjergCougar;
    "52"?:           EsbjergCougar;
    "5"?:            ChiangMaiGoose;
    "141"?:          The141;
    "49"?:           ChiangMaiGoose;
    "91"?:           EsbjergCougar;
    "29"?:           ChiangMaiGoose;
    "136"?:          EsbjergCougar;
    "159"?:          EsbjergCougar;
    "11"?:           ChiangMaiGoose;
    "98"?:           EsbjergCougar;
    "46"?:           ChiangMaiGoose;
    "8"?:            ChiangMaiGoose;
    "109"?:          EsbjergCougar;
    "56"?:           ChiangMaiGoose;
    "139"?:          EsbjergCougar;
    "117"?:          EsbjergCougar;
    nutrition_fr?:   BasseTerreElephant;
    "107"?:          EsbjergCougar;
    "40"?:           ChiangMaiGoose;
    "112"?:          EsbjergCougar;
    "114"?:          EsbjergCougar;
    "3":             ChiangMaiGoose;
    "15"?:           ChiangMaiGoose;
    "42"?:           ChiangMaiGoose;
    "9"?:            ChiangMaiGoose;
    "145"?:          EsbjergCougar;
    "125"?:          EsbjergCougar;
    "37"?:           ChiangMaiGoose;
    "134"?:          EsbjergCougar;
    "110"?:          EsbjergCougar;
    "140"?:          EsbjergCougar;
    "1"?:            ChiangMaiGoose;
    "148"?:          EsbjergCougar;
    "28"?:           ChiangMaiGoose;
    "135"?:          EsbjergCougar;
    "39"?:           ChiangMaiGoose;
    "113"?:          EsbjergCougar;
    "16"?:           ChiangMaiGoose;
    "12"?:           ChiangMaiGoose;
    "150"?:          EsbjergCougar;
    "128"?:          EsbjergCougar;
    "121"?:          EsbjergCougar;
    "47"?:           ChiangMaiGoose;
    "120"?:          EsbjergCougar;
    "115"?:          ChiangMaiGoose;
    "129"?:          EsbjergCougar;
    "25"?:           ChiangMaiGoose;
    "17"?:           ChiangMaiGoose;
    "55"?:           ChiangMaiGoose;
    "34"?:           ChiangMaiGoose;
    "119"?:          EsbjergCougar;
    "41"?:           ChiangMaiGoose;
    "86"?:           EsbjergCougar;
    "87"?:           EsbjergCougar;
    "104"?:          EsbjergCougar;
    "89"?:           EsbjergCougar;
    "75"?:           EsbjergCougar;
    ingredients_de?: BasseTerreElephant;
    "7"?:            ChiangMaiGoose;
    "85"?:           EsbjergCougar;
    "78"?:           EsbjergCougar;
    "22"?:           ChiangMaiGoose;
    front_en?:       Front;
    ingredients_en?: BasseTerreElephant;
    "73"?:           EsbjergCougar;
    "21"?:           ChiangMaiGoose;
    "101"?:          EsbjergCougar;
    "105"?:          EsbjergCougar;
    "84"?:           EsbjergCougar;
    nutrition_en?:   BasseTerreElephant;
    "74"?:           EsbjergCougar;
    "80"?:           EsbjergCougar;
    "103"?:          EsbjergCougar;
    "82"?:           EsbjergCougar;
    "88"?:           EsbjergCougar;
    "69"?:           EsbjergCougar;
    "77"?:           EsbjergCougar;
    "72"?:           EsbjergCougar;
    "76"?:           EsbjergCougar;
    "102"?:          EsbjergCougar;
    "18"?:           ChiangMaiGoose;
    "81"?:           EsbjergCougar;
    "79"?:           EsbjergCougar;
    "71"?:           EsbjergCougar;
    "83"?:           EsbjergCougar;
    "70"?:           EsbjergCougar;
    "106"?:          EsbjergCougar;
    "100"?:          EsbjergCougar;
    "59"?:           ChiangMaiGoose;
    "54"?:           EsbjergCougar;
    "32"?:           ChiangMaiGoose;
    "65"?:           EsbjergCougar;
    "66"?:           EsbjergCougar;
    "60"?:           ChiangMaiGoose;
    nutrition?:      IngredientsClass;
    "63"?:           EsbjergCougar;
    "62"?:           EsbjergCougar;
    "61"?:           EsbjergCougar;
    ingredients?:    IngredientsClass;
    front?:          IngredientsClass;
    "64"?:           EsbjergCougar;
    "43"?:           ChiangMaiGoose;
    ingredients_nl?: BasseTerreElephant;
    nutrition_vi?:   BasseTerreElephant;
    front_es?:       BasseTerreElephant;
    nutrition_de?:   BasseTerreElephant;
    front_de?:       BasseTerreElephant;
    ingredients_es?: BasseTerreElephant;
    front_new_lc?:   FrontNewLc;
    ingredients_ro?: BasseTerreElephant;
    nutrition_ro?:   BasseTerreElephant;
    front_ro?:       BasseTerreElephant;
    ingredients_ru?: BasseTerreElephant;
    front_cs?:       BasseTerreElephant;
    nutrition_ru?:   BasseTerreElephant;
    ingredients_cs?: BasseTerreElephant;
    ingredients_bg?: BasseTerreElephant;
    front_nl?:       FrontNl;
    ingredients_pl?: BasseTerreElephant;
    ingredients_pt?: BasseTerreElephant;
    front_pl?:       BasseTerreElephant;
    ingredients_it?: BasseTerreElephant;
    nutrition_pl?:   BasseTerreElephant;
}

export interface ChiangMaiGoose {
    uploader:   string;
    uploaded_t: number | string;
    sizes:      Sizes;
}

export interface Sizes {
    full:   The100;
    "100":  The100;
    "400":  The100;
    "200"?: The100;
}

export interface The100 {
    h: number;
    w: number;
}

export interface EsbjergCougar {
    sizes:      Sizes;
    uploader:   string;
    uploaded_t: number;
}

export interface The141 {
    uploaded_t: string;
    uploader:   string;
    sizes:      Sizes;
}

export interface IngredientsClass {
    imgid:        string;
    geometry:     string;
    sizes:        Sizes;
    normalize:    null | string;
    rev:          string;
    white_magic:  null | string;
    ocr?:         number;
    orientation?: string;
}

export interface BasseTerreElephant {
    imgid:        string;
    y2?:          number | null | string;
    angle?:       number | null | string;
    sizes:        Sizes;
    normalize:    null | string;
    rev:          string;
    y1?:          number | null | string;
    geometry:     string;
    x1?:          number | null | string;
    white_magic:  null | string;
    x2?:          number | null | string;
    orientation?: null | string;
    ocr?:         number;
}

export interface Front {
    geometry:    string;
    x2?:         null | string;
    x1?:         null | string;
    white_magic: null | string;
    y2?:         null | string;
    imgid:       string;
    sizes:       Sizes;
    normalize:   null | string;
    angle?:      number | null | string;
    rev:         string;
    y1?:         null | string;
}

export interface FrontNewLc {
    y2:          string;
    imgid:       string;
    angle:       number;
    normalize:   null;
    sizes:       Sizes;
    rev:         string;
    y1:          string;
    geometry:    string;
    x1:          string;
    white_magic: null;
    x2:          string;
}

export interface FrontNl {
    rev:         string;
    y1:          number;
    y2:          number;
    imgid:       string;
    sizes:       Sizes;
    normalize:   null;
    angle:       number;
    x2:          number;
    white_magic: null;
    x1:          number;
    geometry:    string;
}

export interface Ingredient {
    has_sub_ingredients?: FromPalmOil;
    id:                   string;
    vegan?:               FromPalmOil;
    vegetarian?:          FromPalmOil;
    percent?:             number | string;
    text:                 string;
    rank?:                number;
    from_palm_oil?:       FromPalmOil;
    labels?:              string;
    origin?:              string;
}

export enum FromPalmOil {
    Ignore = "ignore",
    Maybe = "maybe",
    No = "no",
    Yes = "yes",
}

export enum Lang {
    De = "de",
    Fr = "fr",
    Pl = "pl",
}

export interface LanguagesCodes {
    fr?: number;
    en?: number;
    de?: number;
    it?: number;
    nl?: number;
    vi?: number;
    es?: number;
    sv?: number;
    lc?: number;
    ro?: number;
    bg?: number;
    pt?: number;
    cs?: number;
    ru?: number;
    pl?: number;
}

export enum MiscTag {
    EnNutriscoreComputed = "en:nutriscore-computed",
    EnNutriscoreNotComputed = "en:nutriscore-not-computed",
    EnNutritionAllNutriscoreValuesKnown = "en:nutrition-all-nutriscore-values-known",
    EnNutritionFruitsVegetablesNuts = "en:nutrition-fruits-vegetables-nuts",
    EnNutritionFruitsVegetablesNutsEstimate = "en:nutrition-fruits-vegetables-nuts-estimate",
    EnNutritionGradeComputedForPreparedProduct = "en:nutrition-grade-computed-for-prepared-product",
    EnNutritionNoFiber = "en:nutrition-no-fiber",
    EnNutritionNoFiberOrFruitsVegetablesNuts = "en:nutrition-no-fiber-or-fruits-vegetables-nuts",
    EnNutritionNoFruitsVegetablesNuts = "en:nutrition-no-fruits-vegetables-nuts",
}

export enum NoNutritionData {
    Empty = "",
    Off = "off",
}

export enum NutriscoreGrade {
    A = "a",
    B = "b",
    C = "c",
    D = "d",
    E = "e",
    NotApplicable = "not-applicable",
}

export enum NovaGroupsTag {
    En3ProcessedFoods = "en:3-processed-foods",
    En4UltraProcessedFoodAndDrinkProducts = "en:4-ultra-processed-food-and-drink-products",
}

export interface NutrientLevels {
    salt:            Salt;
    "saturated-fat": Fat;
    fat:             Fat;
    sugars:          Fat;
}

export enum Fat {
    High = "high",
    Moderate = "moderate",
}

export enum Salt {
    Low = "low",
    Moderate = "moderate",
}

export enum NutrientLevelsTag {
    EnFatInHighQuantity = "en:fat-in-high-quantity",
    EnFatInModerateQuantity = "en:fat-in-moderate-quantity",
    EnSaltInLowQuantity = "en:salt-in-low-quantity",
    EnSaltInModerateQuantity = "en:salt-in-moderate-quantity",
    EnSaturatedFatInHighQuantity = "en:saturated-fat-in-high-quantity",
    EnSaturatedFatInModerateQuantity = "en:saturated-fat-in-moderate-quantity",
    EnSugarsInHighQuantity = "en:sugars-in-high-quantity",
    EnSugarsInModerateQuantity = "en:sugars-in-moderate-quantity",
}

export interface Nutriments {
    carbohydrates_value:                                number;
    salt_100g:                                          number;
    sugars:                                             number;
    "saturated-fat_100g":                               number;
    sodium_value:                                       number;
    "fruits-vegetables-nuts"?:                          number;
    fat_prepared_serving?:                              number;
    "energy-kcal_unit"?:                                EnergyUnit;
    fat_prepared?:                                      number;
    sodium_100g:                                        number;
    carbohydrates_unit:                                 CasablancaGroundhog;
    energy_100g:                                        number;
    energy_unit:                                        EnergyUnit;
    energy_prepared_unit?:                              EnergyUnit;
    proteins_prepared_value?:                           number;
    "energy-kj_unit"?:                                  EnergyUnit;
    salt_prepared_unit?:                                CasablancaGroundhog;
    "carbon-footprint-from-known-ingredients_100g"?:    number;
    fat_unit:                                           CasablancaGroundhog;
    carbohydrates_prepared?:                            number;
    energy_prepared_serving?:                           number;
    sodium_prepared_unit?:                              CasablancaGroundhog;
    "fruits-vegetables-nuts_value"?:                    number;
    carbohydrates_prepared_100g?:                       number;
    proteins_prepared_serving?:                         number;
    fiber_prepared_100g?:                               number;
    fiber_prepared_serving?:                            number;
    "energy-kj_value"?:                                 number;
    energy_prepared_100g?:                              number;
    proteins_prepared_unit?:                            CasablancaGroundhog;
    salt_prepared_100g?:                                number;
    fat_prepared_value?:                                number;
    "nova-group_serving"?:                              number;
    sodium_prepared_100g?:                              number;
    "saturated-fat_prepared_100g"?:                     number;
    fiber_prepared?:                                    number;
    sodium:                                             number;
    sugars_value:                                       number;
    energy_serving?:                                    number;
    sugars_100g:                                        number;
    sugars_prepared_value?:                             number;
    "carbon-footprint-from-known-ingredients_serving"?: number;
    salt_prepared_serving?:                             number;
    sodium_prepared?:                                   number;
    fiber_value?:                                       number;
    carbohydrates_100g:                                 number;
    sugars_prepared_100g?:                              number;
    sugars_unit:                                        CasablancaGroundhog;
    "nova-group_100g"?:                                 number;
    "nova-group"?:                                      number;
    "nutrition-score-uk_100g"?:                         number;
    energy_value:                                       number;
    "fruits-vegetables-nuts_100g"?:                     number;
    energy_prepared_value?:                             number;
    carbohydrates_serving?:                             number;
    proteins:                                           number;
    "energy-kcal_value"?:                               number;
    "energy-kj_prepared"?:                              number;
    fat_100g:                                           number;
    proteins_prepared?:                                 number;
    fat:                                                number;
    "saturated-fat_value":                              number;
    sugars_prepared_unit?:                              CasablancaGroundhog;
    sugars_prepared_serving?:                           number;
    proteins_serving?:                                  number;
    sodium_serving?:                                    number;
    "energy-kj_prepared_100g"?:                         number;
    "nutrition-score-fr_100g"?:                         number;
    "energy-kj_100g"?:                                  number;
    proteins_100g:                                      number;
    fiber_unit?:                                        CasablancaGroundhog;
    "energy-kj"?:                                       number;
    salt_value:                                         number;
    carbohydrates:                                      number;
    "energy-kj_prepared_unit"?:                         EnergyUnit;
    fat_prepared_100g?:                                 number;
    fiber?:                                             number;
    fat_value:                                          number;
    salt_serving?:                                      number;
    "energy-kj_prepared_value"?:                        number;
    "energy-kcal_100g"?:                                number;
    "nutrition-score-fr"?:                              number;
    fiber_prepared_value?:                              number;
    salt:                                               number;
    sodium_prepared_value?:                             number;
    fat_serving?:                                       number;
    sodium_prepared_serving?:                           number;
    "nutrition-score-uk"?:                              number;
    proteins_prepared_100g?:                            number;
    "saturated-fat_unit":                               CasablancaGroundhog;
    sugars_serving?:                                    number;
    "fruits-vegetables-nuts_unit"?:                     CasablancaGroundhog;
    salt_prepared_value?:                               number;
    "saturated-fat_prepared_value"?:                    number;
    "energy-kcal"?:                                     number;
    "saturated-fat_serving"?:                           number;
    sodium_unit:                                        CasablancaGroundhog;
    energy_prepared?:                                   number;
    energy:                                             number;
    fiber_100g?:                                        number;
    proteins_unit:                                      CasablancaGroundhog;
    sugars_prepared?:                                   number;
    "saturated-fat_prepared_serving"?:                  number;
    "saturated-fat_prepared_unit"?:                     CasablancaGroundhog;
    "energy-kj_prepared_serving"?:                      number;
    fat_prepared_unit?:                                 CasablancaGroundhog;
    proteins_value:                                     number;
    "saturated-fat":                                    number;
    carbohydrates_prepared_serving?:                    number;
    "energy-kcal_serving"?:                             number;
    "saturated-fat_prepared"?:                          number;
    salt_prepared?:                                     number;
    "carbon-footprint-from-known-ingredients_product"?: number;
    salt_unit:                                          CasablancaGroundhog;
    "fruits-vegetables-nuts_serving"?:                  number;
    carbohydrates_prepared_unit?:                       CasablancaGroundhog;
    "fruits-vegetables-nuts_label"?:                    string;
    fiber_serving?:                                     number;
    carbohydrates_prepared_value?:                      number;
    fiber_prepared_unit?:                               CasablancaGroundhog;
    "energy-kj_serving"?:                               number;
    "cacao-maigre_value"?:                              number;
    "cacao-maigre_unit"?:                               string;
    "cacao-maigre_label"?:                              string;
    "nutrition-score-uk_serving"?:                      number;
    "cacao-maigre"?:                                    number;
    "cacao-maigre_serving"?:                            number;
    "nutrition-score-fr_serving"?:                      number;
    "cacao-maigre_100g"?:                               number;
    "fruits-vegetables-nuts-estimate_label"?:           string;
    cocoa_label?:                                       string;
    cocoa_value?:                                       number;
    "fruits-vegetables-nuts-estimate_serving"?:         number;
    "fruits-vegetables-nuts-estimate_100g"?:            number;
    cocoa?:                                             number;
    "fruits-vegetables-nuts-estimate_value"?:           number;
    cocoa_100g?:                                        number;
    "fruits-vegetables-nuts-estimate_unit"?:            string;
    "fruits-vegetables-nuts-estimate"?:                 number;
    cocoa_unit?:                                        CasablancaGroundhog;
    cocoa_serving?:                                     number;
    iron_100g?:                                         number;
    iron_value?:                                        number;
    iron_unit?:                                         Unit;
    magnesium_unit?:                                    Unit;
    magnesium_100g?:                                    number;
    magnesium_serving?:                                 number;
    magnesium?:                                         number;
    magnesium_label?:                                   string;
    magnesium_value?:                                   number;
    iron_serving?:                                      number;
    iron?:                                              number;
    iron_label?:                                        string;
    "vitamin-b1_value"?:                                number;
    "vitamin-b9"?:                                      number;
    "vitamin-b6_100g"?:                                 number;
    "vitamin-b9_label"?:                                string;
    calcium_serving?:                                   number;
    "vitamin-e_unit"?:                                  Unit;
    calcium_100g?:                                      number;
    "vitamin-e_serving"?:                               number;
    "vitamin-b1"?:                                      number;
    "vitamin-b1_unit"?:                                 Unit;
    "vitamin-pp"?:                                      number;
    calcium_value?:                                     number;
    "vitamin-b9_serving"?:                              number;
    "vitamin-b1_100g"?:                                 number;
    "vitamin-e_100g"?:                                  number;
    "vitamin-pp_value"?:                                number;
    "vitamin-b6_serving"?:                              number;
    "vitamin-b6_unit"?:                                 Unit;
    "vitamin-pp_label"?:                                string;
    "vitamin-b6_value"?:                                number;
    "vitamin-pp_serving"?:                              number;
    "vitamin-b6"?:                                      number;
    "vitamin-b6_label"?:                                string;
    "vitamin-e_label"?:                                 string;
    "vitamin-b9_unit"?:                                 string;
    "vitamin-e_value"?:                                 number;
    "vitamin-b1_serving"?:                              number;
    "vitamin-e"?:                                       number;
    calcium_label?:                                     string;
    "vitamin-b9_value"?:                                number;
    calcium_unit?:                                      Unit;
    "vitamin-b1_label"?:                                string;
    "vitamin-b9_100g"?:                                 number;
    "vitamin-pp_100g"?:                                 number;
    calcium?:                                           number;
    "vitamin-pp_unit"?:                                 Unit;
    starch_unit?:                                       CasablancaGroundhog;
    alcohol_100g?:                                      number;
    starch?:                                            number;
    alcohol_value?:                                     number;
    alcohol?:                                           number;
    starch_value?:                                      number;
    starch_100g?:                                       number;
    starch_serving?:                                    number;
    alcohol_unit?:                                      string;
    alcohol_serving?:                                   number;
    magnesium_prepared_value?:                          number;
    magnesium_prepared_100g?:                           number;
    "energy-kcal_prepared_serving"?:                    number;
    magnesium_prepared_serving?:                        number;
    "energy-kcal_prepared"?:                            number;
    "energy-kcal_prepared_value"?:                      number;
    "energy-kcal_prepared_unit"?:                       EnergyUnit;
    magnesium_prepared?:                                number;
    "energy-kcal_prepared_100g"?:                       number;
    magnesium_prepared_unit?:                           Unit;
    phosphorus_label?:                                  string;
    phosphorus_serving?:                                number;
    phosphorus_unit?:                                   Unit;
    phosphorus_100g?:                                   number;
    phosphorus?:                                        number;
    phosphorus_value?:                                  number;
    iron_prepared_100g?:                                number;
    "vitamin-d_prepared_value"?:                        number;
    "vitamin-d_unit"?:                                  string;
    phosphorus_prepared_100g?:                          number;
    potassium_prepared?:                                number;
    zinc_prepared_serving?:                             number;
    "vitamin-c_prepared"?:                              number;
    "vitamin-d_label"?:                                 string;
    phosphorus_prepared_value?:                         number;
    potassium_prepared_value?:                          number;
    potassium_unit?:                                    Unit;
    phosphorus_prepared_serving?:                       number;
    zinc_prepared?:                                     number;
    zinc_prepared_value?:                               number;
    calcium_prepared_serving?:                          number;
    "vitamin-b1_prepared_100g"?:                        number;
    "vitamin-d_prepared_serving"?:                      number;
    "vitamin-c_prepared_value"?:                        number;
    phosphorus_prepared?:                               number;
    iron_prepared_value?:                               number;
    "vitamin-b1_prepared_serving"?:                     number;
    zinc_prepared_100g?:                                number;
    potassium_label?:                                   string;
    potassium_prepared_serving?:                        number;
    "vitamin-c_prepared_100g"?:                         number;
    calcium_prepared?:                                  number;
    iron_prepared_serving?:                             number;
    "vitamin-d_prepared_100g"?:                         number;
    "vitamin-c_prepared_serving"?:                      number;
    "vitamin-c_unit"?:                                  Unit;
    calcium_prepared_100g?:                             number;
    potassium_prepared_100g?:                           number;
    "vitamin-c_label"?:                                 string;
    calcium_prepared_value?:                            number;
    iron_prepared?:                                     number;
    "vitamin-b1_prepared_value"?:                       number;
    "vitamin-d_prepared"?:                              number;
    "vitamin-b1_prepared"?:                             number;
    zinc_label?:                                        string;
    zinc_unit?:                                         Unit;
    zinc_serving?:                                      number;
    zinc?:                                              number;
    zinc_100g?:                                         number;
    zinc_value?:                                        number;
    "trans-fat_value"?:                                 number;
    "trans-fat"?:                                       number;
    "trans-fat_unit"?:                                  CasablancaGroundhog;
    "monounsaturated-fat_100g"?:                        number;
    copper?:                                            number;
    copper_unit?:                                       Unit;
    copper_label?:                                      string;
    "trans-fat_label"?:                                 string;
    "trans-fat_100g"?:                                  number;
    copper_value?:                                      number;
    "monounsaturated-fat"?:                             number;
    "monounsaturated-fat_value"?:                       number;
    "monounsaturated-fat_label"?:                       string;
    copper_100g?:                                       number;
    "monounsaturated-fat_unit"?:                        CasablancaGroundhog;
}

export enum Unit {
    Mg = "mg",
}

export enum CasablancaGroundhog {
    Empty = "",
    G = "g",
}

export enum EnergyUnit {
    KJ = "kJ",
    Kcal = "kcal",
    Kj = "kj",
}

export interface NutriscoreData {
    proteins:                                              number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
    is_cheese:                                             number;
    is_beverage:                                           number;
    energy_value:                                          number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_value:  number;
    grade:                                                 NutriscoreGrade;
    energy:                                                number;
    fiber_value:                                           number;
    proteins_value:                                        number;
    fiber_points:                                          number;
    score:                                                 number;
    saturated_fat_ratio_points:                            number;
    proteins_points:                                       number;
    saturated_fat:                                         number;
    saturated_fat_value:                                   number;
    sodium:                                                number;
    sugars_value:                                          number;
    is_water:                                              number;
    negative_points:                                       number;
    sugars_points:                                         number;
    positive_points:                                       number;
    energy_points:                                         number;
    saturated_fat_ratio_value:                             number;
    is_fat:                                                number;
    fiber:                                                 number;
    saturated_fat_points:                                  number;
    saturated_fat_ratio:                                   number;
    fruits_vegetables_nuts_colza_walnut_olive_oils:        number;
    sodium_value:                                          number;
    sugars:                                                number;
    sodium_points:                                         number;
}

export enum NutritionDataPPer {
    Serving = "serving",
    The100G = "100g",
}

export enum Origins {
    AfriqueDeLOuestAmériqueDuSudMadagascar = "Afrique de l'Ouest,Amérique du Sud,Madagascar",
    AmériqueDuSud = "Amérique du Sud",
    AsiagoItalie = "Asiago,Italie",
    Empty = "",
    Inconnue = "Inconnue",
    NutritionEtSantéSASBP10631250Revel = "Nutrition et santé SAS,BP 106,31250,Revel",
}

export enum PnnsGroups1 {
    CerealsAndPotatoes = "Cereals and potatoes",
    MilkAndDairyProducts = "Milk and dairy products",
    SugarySnacks = "Sugary snacks",
    Unknown = "unknown",
}

export enum PnnsGroups1_Tag {
    CerealsAndPotatoes = "cereals-and-potatoes",
    Known = "known",
    MilkAndDairyProducts = "milk-and-dairy-products",
    MissingAssociation = "missing-association",
    SugarySnacks = "sugary-snacks",
    Unknown = "unknown",
}

export enum PnnsGroups2 {
    BiscuitsAndCakes = "Biscuits and cakes",
    BreakfastCereals = "Breakfast cereals",
    ChocolateProducts = "Chocolate products",
    IceCream = "Ice cream",
    Sweets = "Sweets",
    Unknown = "unknown",
}

export enum PnnsGroups2_Tag {
    BiscuitsAndCakes = "biscuits-and-cakes",
    BreakfastCereals = "breakfast-cereals",
    ChocolateProducts = "chocolate-products",
    IceCream = "ice-cream",
    Known = "known",
    MissingAssociation = "missing-association",
    Sweets = "sweets",
    Unknown = "unknown",
}

export interface SelectedImages {
    ingredients: Ingredients;
    nutrition:   Nutrition;
    front:       SelectedImagesFront;
}

export interface SelectedImagesFront {
    display: FrontDisplay;
    small:   FrontDisplay;
    thumb:   FrontDisplay;
}

export interface FrontDisplay {
    fr?: string;
    en?: string;
    es?: string;
    de?: string;
    ro?: string;
    nl?: string;
    cs?: string;
    pl?: string;
}

export interface Ingredients {
    display: IngredientsDisplay;
    thumb:   IngredientsDisplay;
    small:   IngredientsDisplay;
}

export interface IngredientsDisplay {
    fr?: string;
    en?: string;
    de?: string;
    nl?: string;
    es?: string;
    ro?: string;
    ru?: string;
    cs?: string;
    pt?: string;
    bg?: string;
    pl?: string;
    it?: string;
}

export interface Nutrition {
    small:   NutritionDisplay;
    thumb:   NutritionDisplay;
    display: NutritionDisplay;
}

export interface NutritionDisplay {
    fr?: string;
    en?: string;
    vi?: string;
    de?: string;
    ro?: string;
    ru?: string;
    pl?: string;
}

export interface Source {
    images:              string[];
    name?:               Name;
    import_t:            number;
    url:                 string;
    manufacturer?:       string;
    id:                  ID;
    fields:              string[];
    source_licence?:     SourceLicence;
    source_licence_url?: string;
}

export enum ID {
    Ferrero = "ferrero",
    OpenfoodCh = "openfood-ch",
}

export enum Name {
    Ferrero = "Ferrero",
    FoodRepo = "FoodRepo",
}

export enum SourceLicence {
    CreativeCommonsAttribution40InternationalLicense = "Creative Commons Attribution 4.0 International License",
}

export enum States {
    EnBrandsCompleted = "en:brands-completed",
    EnCategoriesCompleted = "en:categories-completed",
    EnCharacteristicsCompleted = "en:characteristics-completed",
    EnCharacteristicsToBeCompleted = "en:characteristics-to-be-completed",
    EnChecked = "en:checked",
    EnComplete = "en:complete",
    EnExpirationDateCompleted = "en:expiration-date-completed",
    EnExpirationDateToBeCompleted = "en:expiration-date-to-be-completed",
    EnIngredientsCompleted = "en:ingredients-completed",
    EnIngredientsToBeCompleted = "en:ingredients-to-be-completed",
    EnNutritionFactsCompleted = "en:nutrition-facts-completed",
    EnPackagingCodeToBeCompleted = "en:packaging-code-to-be-completed",
    EnPackagingCompleted = "en:packaging-completed",
    EnPackagingToBeCompleted = "en:packaging-to-be-completed",
    EnPhotosToBeValidated = "en:photos-to-be-validated",
    EnPhotosUploaded = "en:photos-uploaded",
    EnPhotosValidated = "en:photos-validated",
    EnProductNameCompleted = "en:product-name-completed",
    EnQuantityCompleted = "en:quantity-completed",
    EnQuantityToBeCompleted = "en:quantity-to-be-completed",
    EnToBeChecked = "en:to-be-checked",
    EnToBeCompleted = "en:to-be-completed",
}

export enum TracesFromIngredients {
    BléSésameFruitsÀCoque = "blé, sésame, fruits à coque",
    Empty = "",
    GlutenSojaArachidesFruitsÀCoque = "gluten, soja, arachides, fruits à coque",
    OrzeszkiZiemne = " orzeszki ziemne",
}

export enum UpdateKey {
    Nrj = "nrj",
}
