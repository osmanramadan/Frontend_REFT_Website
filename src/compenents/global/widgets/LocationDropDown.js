
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function LocationDropdown({ addhall,onChange,location,cityid}) {
  const [isActive, setIsActive] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const changeLocation = (location) => {
    onChange(location);
    setIsActive(!isActive);
  };



  const data = [
    { 
        id: 1, name: "Cairo-القاهرة", towns: [
        { ar: "المطرية", en: "Elmataria" },
        { ar: "عين شمس", en: "Ean shams" },
        { ar: "السلام أول", en: "El salam awl" },
        { ar: "السلام ثاني", en: "El salam thani" },
        { ar: "النزهة", en: "El nozha" },
        { ar: "مصر الجديدة", en: "Masr elgededa" },
        { ar: "مدينة نصر", en: "Nasr city" },
        { ar: "الوايلي", en: "El waylay" },
        { ar: "باب الشعرية", en: "Bab elshearya" },
        { ar: "وسط القاهرة", en: "Downtown cairo" },
        { ar: "الموسكي", en: "El mosky" },
        { ar: "الأزبكية", en: "El azbakia" },
        { ar: "عابدين", en: "Abdeen" },
        { ar: "بولاق", en: "Bolaq" },
        { ar: "منشأة ناصر", en: "Monshaa naser" },
        { ar: "الزيتون", en: "El zaytoon" },
        { ar: "حدائق القبة", en: "Hadaeq el koba" },
        { ar: "الزاوية الحمرا", en: "El zawya elhamra" },
        { ar: "الشرابية", en: "El sharabia" },
        { ar: "الساحل", en: "El sahel" },
        { ar: "شبرا", en: "SHobra" },
        { ar: "روض الفرج", en: "Rood elfrag" },
        { ar: "الأميرية", en: "El ameria" },
        { ar: "السيدة زينب", en: "Elsayda zynab" },
        { ar: "مصر القديمة", en: "Masr elkadema" },
        { ar: "الخليفة", en: "El khalefa" },
        { ar: "المقطم", en: "El mokatam" },
        { ar: "البساتين", en: "El basateen" },
        { ar: "دار السلام", en: "Dar elsalam" },
        { ar: "المعادي", en: "El maadi" },
        { ar: "طرة", en: "Tora" },
        { ar: "حلوان", en: "Helwan" },
        { ar: "التبين", en: "Tl tebeen" },
        { ar: "15 مايو", en: "15th of may" },
        { ar: "المعصرة", en: "El maasara" },
        { ar: "التجمع الأول", en: "El tagamo3 el awl" },
        { ar: "التجمع الثالث", en: "El tagamo3 el talet" },
        { ar: "التجمع الخامس", en: "El tagamo3 el khames" },
        { ar: "القطامية", en: "El katamia" },
        { ar: "الشروق", en: "El shorouq" },
        { ar: "المستقبل", en: "El mostakbal" },
        { ar: "الرحاب", en: "El reyhab" },
        { ar: "مدينة بدر", en: "Badr city" },
        { ar: "العاصمة", en: "The capital" }
    ] },
    { id: 2, name: "Giza-الجيزة", towns: [
        { ar: "المهندسين", en: "El mohndseen" },
        { ar: "العجوزة", en: "El agoza" },
        { ar: "الكيت كات", en: "Elket kat" },
        { ar: "إمبابة", en: "Empapa" },
        { ar: "الوراق", en: "El waraq" },
        { ar: "بشتيل", en: "Bashteel" },
        { ar: "البراجيل", en: "El bragel" },
        { ar: "أبو رواش", en: "Abu rawash" },
        { ar: "كرداسة", en: "Kerdasa" },
        { ar: "أوسيم", en: "Oseeam" },
        { ar: "المنصورية", en: "El mansoria" },
        { ar: "الشيخ زايد", en: "El shekh Zayed" },
        { ar: "المعتمدية", en: "Elmetamdia" },
        { ar: "ناهيا", en: "Nahia" },
        { ar: "صفط", en: "Saft" },
        { ar: "منشأة البكاري", en: "Monshaa el bakari" },
        { ar: "بولاق الدكرور", en: "Bolaq eldakror" },
        { ar: "ميدان لبنان", en: "Medan lebenan" },
        { ar: "معتقة عقبة", en: "Meat okba" },
        { ar: "الدقي", en: "El doki" },
        { ar: "الحرم", en: "El hrm" },
        { ar: "فيصل", en: "Fesal" },
        { ar: "العمرانية", en: "El omrania" },
        { ar: "كفر طهرمس", en: "Kafr tohormos" },
        { ar: "أم المصريين", en: "Om elmasreen" },
        { ar: "المأمون", en: "El maamon" },
        { ar: "6 أكتوبر", en: "6th October" },
        { ar: "المنيب", en: "El moneeb" },
        { ar: "أبو النمرس", en: "Abu elnomros" },
        { ar: "طرسا", en: "Tersa" },
        { ar: "بني سويف", en: "Bane suef" },
        { ar: "الحوامدية", en: "Elhwamdia" },
        { ar: "سقارة", en: "Sakara" },
        { ar: "البدرشين", en: "El badrasheen" },
        { ar: "دهشور", en: "Dahshor" },
        { ar: "الصف", en: "El saf" },
        { ar: "العتفيه", en: "Atfeeh" }
    ] },
    { id: 3, name: "ALQalyubia- القليوبية", towns: [
      {id: 3, id: 1,ar: "بنها", en: "Benha" },
      {id: 3, id: 1,ar: "قليوب", en: "Qalyoub" },
      {id: 3, ar: "القناطر الخيرية", en: "AlQanatir Al Khayriyah" },
      {id: 3, ar: "شبرا الخيمة", en: "SHobra AlKheima" },
      {id: 3, ar: "الخانكة", en: "El Khankah" },
      {id: 3, ar: "كفر شكر", en: "Kafr Shukr" },
      {id: 3, ar: "شبين القناطر", en: "Shibin AlQanatir" },
      {id: 3, ar: "طوخ", en: "Tookh" },
      {id: 3, ar: "العبور", en: "Elobour" },
      {id: 3, ar: "قها", en: "Qaha" },
      {id: 3, ar: "الخصوص", en: "AlKhusus" },
    ] },
    { id: 4, name: "ALMonufia- المنوفية", towns: [
      {id: 4, ar: "منوف", en: "Monuf" },
      {id: 4, ar: "السادات", en: "El Sadat" },
      {id: 4, ar: "أشمون", en: "Ashmun" },
      {id: 4, ar: "قويسنا",en: "Quesna" },
      {id: 4, ar: "شبين الكوم", en: "Shibin AlKoom" },
      {id: 4, ar: "الشهداء", en: "ElShohada" },
      {id: 4, ar: "تلا", en: "Tala" },
      {id: 4, ar: "بركة السبع", en: "Berket AlSaba" },
      {id: 4, ar: "الباجور", en: "AlBajur" },
    ] },
    { id: 5, name: "ALSharqia- الشرقية", towns: [
      {id: 5, ar: "الزقازيق", en: "Zagazig" },
      {id: 5, ar: "الحسينية", en: "El Husseiniya" },
      {id: 5, ar: "فاقوس", en: "Faqous" },
      {id: 5, ar: "بلبيس", en: "Belbeis" },
      {id: 5, ar: "منيا القمح", en: "Minya AlQamh" },
      {id: 5, ar: "أبو حماد", en: "Abu Hammad" },
      {id: 5, ar: "أولاد صقر", en: "Awlad saqr" },
      {id: 5, ar: "العاشر من رمضان", en: "Elasher men Ramadan" },
      {id: 5, ar: "الصالحية الجديدة", en: "New Salhia" },
      {id: 5, ar: "الصالحية القديمة", en: "Old Salhia" },
      {id: 5, ar: "كفر صقر", en: "Kafr Saqr" },
      {id: 5, ar: "أبو كبير", en: "Abu Keber" },		
      {id: 5, ar: "القنايات", en: "El Qanayat" },
      {id: 5, ar: "مشتول السوق", en: "Mashtol ElSoq" },
      {id: 5, ar: "ديرب نجم", en: "Deirb Negm"},
      {id: 5, ar: "الابراهيمية", en: "El Ibrahimiyah" },
      {id: 5, ar: "ههيا", en: "Hehia" },
      {id: 5, ar: "القرين", en: "El Qarin" },
      {id: 5, ar: "صال الحجر", en: "Sal AlHagar" },
    ] },
    { id: 6, name: "ALDakahlia- الدقهلية", towns: [
      {id: 6, ar: "المنصورة", en: "Mansoura" },
      {id: 6, ar: "السنبلاوين", en: "El Sinbillawin" },
      {id: 6, ar: "ميت غمر", en: "Meat Ghamr" },
      {id: 6, ar: "دكرنس", en: "Dekernes" },
      {id: 6, ar: "المطرية", en: "El Mataria" },
      {id: 6, ar: "بلقاس", en: "Belkas" },
      {id: 6, ar: "المنزلة", en: "El Manzala" },
      {id: 6, ar: "طلخا", en: "Talkha"},
      {id: 6, ar: "الجمالية", en: "El gamalia" },
      {id: 6, ar: "منية النصر", en: "Meniet El Nasr" },
      {id: 6, ar: "شربين", en: "Sherbin" },
      {id: 6, ar: "ميت سلسيل", en: "Meat Salsil" },
      {id: 6, ar: "بني عبيد", en: "Bani ebeed" },
      {id: 6, ar: "أجا", en: "Aga" },
      {id: 6, ar: "اخطاب", en: "Ekhtab" },
      {id: 6, ar: "نبروه", en: "Nabaroh" },
      {id: 6, ar: "جمصة", en: "Gamasa" },
      {id: 6, ar: "تمي الامديد", en: "Tami EL Amdeed" },
    ] },
    { id: 7, name: "ALBeheira- البحيرة", towns: [
      {id: 7, ar: "رشيد", en: "Rashid" },
      {id: 7, ar: "شبراخيت", en: "Shubrakhit" },
      {id: 7, ar: "ايتاي البارود", en: "Itai El Baroud" },
      {id: 7, ar: "أبو حمص", en: "Abu Homos" },
      {id: 7, ar: "حوش عيسي", en: "Hoosh Issa" },
      {id: 7, ar: "كفر الدوار", en: "Kafr El Dawwar" },
      {id: 7, ar: "الدلنجات", en: "El dalangat" },
      {id: 7, ar: "كوم حمادة", en: "Kom Hamada" },
      {id: 7, ar: "دمنهور", en: "Damanhour" },
      {id: 7, ar: "المحمودية", en: "El Mahmoudia" },
      {id: 7, ar: "ادكو", en: "Edko" },
      {id: 7, ar: "أبو المطامير", en: "Abu El Matamir" },
      {id: 7, ar: "الرحمانية", en: "El Rahmania" },
      {id: 7, ar: "النوبارية الجديدة", en: "Nubaria el gededa" },
      {id: 7, ar: "وادي النطرون", en: "Wadi el Natrun" },
      {id: 7, ar: "بدر", en: "Badr" },
    ] },
    { id: 8, name: "Kafr El-Sheikh- كفر الشيخ", towns: [
      {id: 8, ar: "مدينة كفر الشيخ", en: "Kafr El-Sheikh City" },
      {id: 8, ar: "دسوق", en: "Desouq" },
      {id: 8, ar: "فوه", en: "Foah" },
      {id: 8, ar: "مطويس", en: "Metowes" },
      {id: 8, ar: "بلطيم", en: "Baltem" },
      {id: 8, ar: "الحامول", en: "El Hamoul" },
      {id: 8, ar: "بيلا", en: "Bella" },
      {id: 8, ar: "الرياض", en: "El Riyad" },
      {id: 8, ar: "سيدي سالم", en: "Sidi Salem" },
      {id: 8, ar: "سيدي غازي", en: "Sidi Ghazi" },
      {id: 8, ar: "برج البرلس", en: "Burg AlBurullus" },
      {id: 8, ar: "مسير", en: "Mesayer" },
      {id: 8, ar: "قلين", en: "Qelin" },	
    ] },
    { id: 9, name: "ALGharbia- الغربية", towns: [
      {id: 9, ar: "طنطا", en: "Tanta" },
      {id: 9, ar: "كفر الزيات", en: "Kafr el Zayat" },
      {id: 9, ar: "المحلة الكبري", en: "El Mahala el Kobra" },
      {id: 9, ar: "بسيون", en: "Basyoun" },
      {id: 9, ar: "زفتي", en: "Zefta" },
      {id: 9, ar: "سمنود", en: "Samannoud" },
      {id: 9, ar: "قطور", en: "Qutour" },
      {id: 9, ar: "السنطة", en: "El Santah" },
    ] },
    { id: 10, name: "Alexandria-الاسكندرية", towns: [
      {id: 10, ar: "حي المنتزة", en: "El Montazah" },
      {id: 10, ar: "حي العجمي", en: "El agami" },
      {id: 10, ar: "مدينة برج العرب", en: "Borg El Arab City" },
      {id: 10, ar: "حي العامرية", en: "AlAmriya" },
      {id: 10, ar: "سموحة", en: "Smouha" },
      {id: 10, ar: "سيدي بشر", en: "Sidi Beshr" },
      {id: 10, ar: "العصافرة ", en: "El Asafraa" },
      {id: 10, ar: "السيوف", en: "El Seyouf" },
      {id: 10, ar: "وسط البلد", en: "Downtown alex" },
      {id: 10, ar: "جليم", en: "Gleem" },
      {id: 10, ar: "رشدي", en: "Roshdi" },
      {id: 10, ar: "سبورتنج", en: "Sporting" },
      {id: 10, ar: "العوايد", en: "El Awaied" },
      {id: 10, ar: "بولكلي", en: "Bolkly" },
      {id: 10, ar: "كفر عبده", en: "Kafr Abdu" },
      {id: 10, ar: "زيزينيا", en: "Zizinia" },
      {id: 10, ar: "الجمرك", en: "El gomrok" },
      {id: 10, ar: "ميامي", en: "Miami" },
      {id: 10, ar: "ميامي الجديدة", en: "Miami el gededa" },
      {id: 10, ar: "أرض الفضالي", en: "Ard El Fadaly" },
      {id: 10, ar: "المندرة", en: "Almandrah" },
    ] },
    { id: 11, name: "Matrouh-مطروح", towns: [
      {id: 11, ar: "مدينة مرسي مطروح", en: "Marsa Matrouh City" },
      {id: 11, ar: "سيدي براني", en: "Sidi Barrani" },
      {id: 11, ar: "سيوة", en: "Siwa" },
      {id: 11, ar: "الحمام", en: "El Hamam" },
      {id: 11, ar: "السلوم", en: "Salloum" },
      {id: 11, ar: "العلمين", en: "El alamein" },
      {id: 11, ar: "النجيلة", en: "El Nejila" },
      {id: 11, ar: "الضبعة", en: "El Dabaa" },
    ] },
    { id: 12, name: "Damietta-دمياط", towns: [
      {id: 12, ar: "مدينة دمياط", en: "Damietta City" },
      {id: 12, ar: "مدينة دمياط الجديدة", en: "Damietta El Gededa" },
      {id: 12, ar: "رأس البر", en: "Ras el Bar" },
      {id: 12, ar: "عزبة البرج", en: "Ezbat el Borg" },
      {id: 12, ar: "فارسكور", en: "Faraskour" },
      {id: 12, ar: "الروضة", en: "El roadah" },
      {id: 12, ar: "الزرقا", en: "El zarqa" },
      {id: 12, ar: "السرو", en: "El serou" },
      {id: 12, ar: "كفر سعد", en: "kafr saad" },
      {id: 12, ar: "ميت أبو غالب", en: "meet abu ghaleb" },
      {id: 12, ar: "كفر البطيخ", en: "kafr el batekh" },
    ] },
    { id: 13, name: "Port Said-بورسعيد", towns: [
      {id: 13, ar: "حي الشرق", en: "East District" },
      {id: 13, ar: "حي الغرب", en: "West District" },
      {id: 13, ar: "حي المناخ", en: "Almonakh District" },
      {id: 13, ar: "حي الضواحي", en: "Aldayahi District" },
      {id: 13, ar: "حي الجنوب", en: "South District" },
      {id: 13, ar: "حي الزهور", en: "Zohour District" },
      {id: 13, ar: "بورفؤاد", en: "Port Fuad" },
    ] },
    { id: 14, name: "Ismailia-الاسماعيلية", towns: [
      {id: 14, ar: "مدينة الاسماعيلية", en: "Ismailia City" },
      {id: 14, ar: "التل الكبير", en: "El tal el Kebir" },
      {id: 14, ar: "فايد", en: "Fayed" },
      {id: 14, ar: "القنطره شرق", en: "El Kantara sharq" },
      {id: 14, ar: "القنطرة غرب", en: "ElKantara gharb" },
      {id: 14, ar: "صوير", en: "Sewear" },
      {id: 14, ar: "القصاصين", en: "El Qassaseen" },
    ] },
    { id: 15, name: "Suez- السويس", towns: [
      {id: 15, ar: "حي السويس", en: "Suez City" },
      {id: 15, ar: "حي الاربعين", en: "El Arbaeen" },
      {id: 15, ar: "حي عتاقة", en: "Ataqah" },
      {id: 15, ar: "حي الجناين", en: "El Ganayen" },
      {id: 15, ar: "حي فيصل", en: "Faisal" },
    ] },
    { id: 16, name: "Red Sea-البحر الاحمر", towns: [
      {id: 16, ar: "الغردقة", en: "Hurghada" },
      {id: 16, ar: "رأس غارب", en: "Ras Ghareb" },
      {id: 16, ar: "القصير", en: "El Quseir" },
      {id: 16, ar: "سفاجا", en: "Safaga" },
      {id: 16, ar: "مرسي علم", en: "Marsa alam" },
      {id: 16, ar: "حلايب", en: "Halayeb" },
      {id: 16, ar: "شلاتين", en: "Shalateen" },
    ] },
    { id: 17, name: "North Sinai- شمال سيناء", towns: [
      {id: 17, ar: "العريش", en: "El arish" },
      {id: 17, ar: "بئر العبد", en: "Bir el Abd" },
      {id: 17, ar: "الحسنة", en: "El Hasanah" },
      {id: 17, ar: "نخل", en: "Nakhl" },
      {id: 17, ar: "الشيخ زويد", en: "Sheikh Zuwaid" },
      {id: 17, ar: "رفح", en: "Rafa" },
    ] },
    { id: 18, name: "South Sinai- جنوب سيناء", towns: [
      {id: 18, ar: "شرم الشيخ", en: "Sharm el Sheikh" },
      {id: 18, ar: "ابو رديس", en: "Abu Redis" },
      {id: 18, ar: "أبو زنيمة", en: "Abu Zenaima" },
      {id: 18, ar: "نويبع", en: "Nuweiba" },
      {id: 18, ar: "طابا", en: "Taba" },
      {id: 18, ar: "رأس صدر", en: "Ras Sedr" },
      {id: 18, ar: "دهب", en: "Dahab" },
      {id: 18, ar: "سانت كاترين", en: "Saint Catherine" },
      {id: 18, ar: "الطور", en: "Tor" },
    ] },
    { id: 19, name: "New Valley- الوادي الجديد", towns: [
      {id: 19, ar: "الخارجة", en: "El Kharga" },
      {id: 19, ar: "الداخلة", en: "El Dakhla" },
      {id: 19, ar: "الفرافرة", en: "El Farafra" },
      {id: 19, ar: "باريس", en: "Baris" },
      {id: 19, ar: "بلاط", en: "Balat" },
    ] },
    { id: 20, name: "ALFaiyum- الفيوم", towns: [
      {id: 20, ar: "مدينة الفيوم", en: "Faiyum City" },
      {id: 20, ar: "سنورس", en: "Senorus" },
      {id: 20, ar: "أبشواي", en: "Abshway" },
      {id: 20, ar: "اطسا", en: "Etsa" },
      {id: 20, ar: "طامية", en: "Tamiya" },
      {id: 20, ar: "يوسف الصديق", en: "Yusuf El Seddik" },
    ] },
    { id: 21, name: "Bani Suef-بني سويف", towns: [
      {id: 21, ar: "مدينة بني سويف", en: "Bani Suef City" },
      {id: 21, ar: "الواسطي", en: "El Wasaty" },
      {id: 21, ar: "ناصر", en: "Naser" },
      {id: 21, ar: "اهداسيا", en: "Ehdasia" },
      {id: 21, ar: "بيا", en: "Biah" },
      {id: 21, ar: "سمسطا", en: "Samusta" },
      {id: 21, ar: "الفشن", en: "El Fashn" },
      {id: 21, ar: "بني سويف الجديدة", en: "Bani Suef el Gededa" },
    ] },
    { id: 22, name: "Assiut-أسيوط", towns: [
      {id: 22, ar: "مدينة أسيوط", en: "Assiut City" },
      {id: 22, ar: "ديروط", en: "Dairout" },
      {id: 22, ar: "القوصية", en: "El Qusiya" },
      {id: 22, ar: "أبنوب", en: "Abnoub" },
      {id: 22, ar: "منفلوط", en: "Manfalout" },
      {id: 22, ar: "الفتح", en: "El Fateh" },
      {id: 22, ar: "أبو تيج", en: "Abu Teeg" },
      {id: 22, ar: "الغنايم", en: "El Ghanayem" },
      {id: 22, ar: "ساحل سليم", en: "Sahel Seleim" },
      {id: 22, ar: "البداري", en: "Al Badari" },
      {id: 22, ar: "صدفا", en: "Sadfa" },
    ] },
    { id: 23, name: "ALMinya-المنيا", towns: [
      {id: 23, ar: "مغاغة", en: "Maghagha" },
      {id: 23, ar: "بني مزار", en: "Bani Mazar" },
      {id: 23, ar: "مطاي", en: "Mattay" },
      {id: 23, ar: "سمالوط", en: "Samalout" },
      {id: 23, ar: "مدينة المنيا", en: "Minya City" },
      {id: 23, ar: "أبو قرقاص", en: "Abu Qurqas" },
      {id: 23, ar: "ملوي", en: "Malawi" },
      {id: 23, ar: "دير مواس", en: "Dayr Mawas" },
      {id: 23, ar: "العدوة", en: "El adwa" },
      {id: 23, ar: "مدينة المنيا الجديدة", en: "El Minya El Gededa" },
    ] },
    { id: 24, name: "Qena- قنا", towns: [
      {id: 24, ar: "مدينة قنا", en: "Qena City" },
      {id: 24, ar: "نجع حمادي", en: "Najh Hammadi" },
      {id: 24, ar: "أبو تشت", en: "Abu Tesht" },
      {id: 24, ar: "فرشوط", en: "Farshout" },
      {id: 24, ar: "الوقف", en: "Alwaqf" },
      {id: 24, ar: "دشنا", en: "Deshna" },
      {id: 24, ar: "قفط", en: "Qift" },
      {id: 24, ar: "قوص", en: "Qus" },
      {id: 24, ar: "نقادة", en: "Nkada" },
    ] },
    { id: 25 ,name: "Sohag-سوهاج", towns: [
      {id: 25,ar: "مدينة سوهاج", en: "Sohag City" },
      {id: 25,ar: "أخميم", en: "Akhmim" },
      {id: 25,ar: "دار السلام", en: "Dar El Salam" },
      {id: 25,ar: "المراغة", en: "El Maragha" },
      {id: 25,ar: "طهطا", en: "Tahta" },
      {id: 25,ar: "طما", en: "Tima" },
      {id: 25,ar: "جهينة", en: "Juhayna" },
      {id: 25,ar: "المنشاة", en: "Al Monshaa" },
      {id: 25,ar: "جرجا", en: "Girga" },
      {id: 25,ar: "البلينا", en: "Al Bleana" },
      {id: 25,ar: "ساقلتة", en: "Saqalta" },
    ] },
    { id: 26,name: "Luxor- الاقصر", towns: [
      {id: 26, ar: "مدينة الأقصر", en: "Luxor City" },
      {id: 26, ar: "مدينة الأقصر الجديدة", en: "Luxor El gededa" },
      {id: 26, ar: "مدينة طيبة الجديدة", en: "Tiba El gededa" },
      {id: 26, ar: "الزينية", en: "El Zayniyah" },
      {id: 26, ar: "البياضية", en: "El Bayadiyah" },
      {id: 26, ar: "القرنة", en: "El Qarna" },
      {id: 26, ar: "أرمنت", en: "Armant" },
      {id: 26, ar: "الطود", en: "El Tod" },
      {id: 26, ar: "أسنا", en: "Esna" },
    ] },
    { id: 27,name: "Aswan-أسوان", towns: [
      {id: 27, ar: "مدينة أسوان", en: "Aswan City" },
      {id: 27, ar: "أسوان الجديدة", en: "Aswan Elgededa" },
      {id: 27, ar: "أبو سمبل", en: "Abu Simbel" },
      {id: 27, ar: "دراو", en: "Daraw" },
      {id: 27, ar: "كوم امبو", en: "Kom Ombo" },
      {id: 27, ar: "نصر النوبة", en: "Nasr Al Nuba" },
      {id: 27, ar: "كلابشة", en: "Kalabsha" },
      {id: 27, ar: "ادفو", en: "Edfu" },
      {id: 27, ar: "السباعية", en: "Al Sobaayia" },
      {id: 27, ar: "البصيلية", en: "Al bosilia" },
      {id: 27, ar: "الرديسة", en: "Al Radisiyah" },
    ] },
];

  return (
    <div
      onClick={toggleDropdown}
      className={addhall ? 'inputfield-hall' : 'auth-dropdown'}

    >
      <p className="dropdown-btn">
        <Row className="d-flex justify-content-between"  style={{fontWeight:"400",color:"#8E8EA0",fontSize:"20px",fontFamily:"cairo","direction":i18n.language === 'en'?'ltr':'rtl'}}>

          <Col className={i18n.language==='en'?'text-start':'text-end'} style={{fontFamily:'cairo'}} >{location?i18n.language==='en'?location.split('/')[0]:location.split('/')[1]:i18n.language === 'en'?'Select Location':'اختر موقعك'}</Col>

          <Col  className={i18n.language==='en'?'text-end mx-2':'text-start mx-2'}>
            <FontAwesomeIcon
              style={{ color: addhall ? '#D0D0D0' : '#FCD980' }}
              icon={faCaretUp}
              flip="vertical"
            />{' '}
          </Col>
        </Row>
      </p>

      <div
        className="auth-dropdown-content"
        style={{
          display: isActive ? 'block' : 'none'
  
        }}
      >
    
          {data && data[cityid?cityid-1:1].towns.length &&  data[cityid?cityid-1:1].towns.map((town, index) => (
          <div className="item" style={{fontFamily:'cairo'}} key={index} onClick={()=>changeLocation(town)}>
            
            {i18n.language === 'en'?town.en:town.ar}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationDropdown;
