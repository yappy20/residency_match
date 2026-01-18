// Hospital data with specialties offered
// Based on major academic medical centers in the US
export const hospitals = [
  {
    id: 'mayo-rochester',
    name: 'Mayo Clinic College of Medicine (Rochester)',
    location: 'Rochester, MN',
    specialties: ['internal-medicine', 'surgery-general', 'radiology-diagnostic', 'anesthesiology', 'emergency-medicine', 'pediatrics', 'obgyn', 'neurology', 'orthopedic-surgery', 'urology', 'plastic-surgery', 'pathology', 'psychiatry', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr', 'radiation-oncology']
  },
  {
    id: 'johns-hopkins',
    name: 'Johns Hopkins Hospital',
    location: 'Baltimore, MD',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'mass-general',
    name: 'Massachusetts General Hospital',
    location: 'Boston, MA',
    specialties: ['internal-medicine', 'surgery-general', 'emergency-medicine', 'anesthesiology', 'radiology-diagnostic', 'psychiatry', 'neurology', 'obgyn', 'pediatrics', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery']
  },
  {
    id: 'cleveland-clinic',
    name: 'Cleveland Clinic',
    location: 'Cleveland, OH',
    specialties: ['internal-medicine', 'surgery-general', 'emergency-medicine', 'anesthesiology', 'radiology-diagnostic', 'neurology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'ucsf',
    name: 'UCSF Medical Center',
    location: 'San Francisco, CA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr', 'radiation-oncology']
  },
  {
    id: 'stanford',
    name: 'Stanford Health Care',
    location: 'Stanford, CA',
    specialties: ['internal-medicine', 'surgery-general', 'emergency-medicine', 'anesthesiology', 'radiology-diagnostic', 'psychiatry', 'neurology', 'obgyn', 'pediatrics', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr', 'radiation-oncology']
  },
  {
    id: 'nyu',
    name: 'NYU Langone Medical Center',
    location: 'New York, NY',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'columbia',
    name: 'Columbia University Medical Center',
    location: 'New York, NY',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'duke',
    name: 'Duke University Hospital',
    location: 'Durham, NC',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr', 'radiation-oncology']
  },
  {
    id: 'vanderbilt',
    name: 'Vanderbilt University Medical Center',
    location: 'Nashville, TN',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-michigan',
    name: 'University of Michigan Hospitals',
    location: 'Ann Arbor, MI',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr', 'radiation-oncology']
  },
  {
    id: 'uc-la',
    name: 'UCLA Medical Center',
    location: 'Los Angeles, CA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr', 'radiation-oncology']
  },
  {
    id: 'u-penn',
    name: 'Hospital of the University of Pennsylvania',
    location: 'Philadelphia, PA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'baylor',
    name: 'Baylor College of Medicine',
    location: 'Houston, TX',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr', 'radiation-oncology']
  },
  {
    id: 'wash-u',
    name: 'Barnes-Jewish Hospital / Washington University',
    location: 'St. Louis, MO',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'yale',
    name: 'Yale-New Haven Hospital',
    location: 'New Haven, CT',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'northwestern',
    name: 'Northwestern Memorial Hospital',
    location: 'Chicago, IL',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'emory',
    name: 'Emory University Hospital',
    location: 'Atlanta, GA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'uc-davis',
    name: 'UC Davis Medical Center',
    location: 'Sacramento, CA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'uc-san-diego',
    name: 'UC San Diego Medical Center',
    location: 'San Diego, CA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'mgh-family-medicine',
    name: 'Mass General Family Medicine Program',
    location: 'Boston, MA',
    specialties: ['family-medicine', 'internal-medicine', 'pediatrics', 'emergency-medicine', 'psychiatry']
  },
  {
    id: 'uw-madison',
    name: 'University of Wisconsin Hospital',
    location: 'Madison, WI',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'family-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'unc',
    name: 'UNC Hospitals',
    location: 'Chapel Hill, NC',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'family-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'u-of-chicago',
    name: 'University of Chicago Medical Center',
    location: 'Chicago, IL',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'boston-university',
    name: 'Boston Medical Center',
    location: 'Boston, MA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'family-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology']
  },
  {
    id: 'brigham-women',
    name: 'Brigham and Women\'s Hospital',
    location: 'Boston, MA',
    specialties: ['internal-medicine', 'surgery-general', 'emergency-medicine', 'anesthesiology', 'radiology-diagnostic', 'psychiatry', 'neurology', 'obgyn', 'pediatrics', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery']
  },
  {
    id: 'beth-israel',
    name: 'Beth Israel Deaconess Medical Center',
    location: 'Boston, MA',
    specialties: ['internal-medicine', 'surgery-general', 'emergency-medicine', 'anesthesiology', 'radiology-diagnostic', 'psychiatry', 'neurology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology']
  },
  {
    id: 'mayo-arizona',
    name: 'Mayo Clinic College of Medicine (Arizona)',
    location: 'Phoenix, AZ',
    specialties: ['internal-medicine', 'surgery-general', 'radiology-diagnostic', 'anesthesiology', 'emergency-medicine', 'obgyn', 'neurology', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology']
  },
  {
    id: 'cedars-sinai',
    name: 'Cedars-Sinai Medical Center',
    location: 'Los Angeles, CA',
    specialties: ['internal-medicine', 'surgery-general', 'emergency-medicine', 'anesthesiology', 'radiology-diagnostic', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology']
  },
  {
    id: 'usc',
    name: 'Keck School of Medicine of USC',
    location: 'Los Angeles, CA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology']
  },
  {
    id: 'mount-sinai',
    name: 'Mount Sinai Hospital',
    location: 'New York, NY',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'cornell',
    name: 'NewYork-Presbyterian/Weill Cornell',
    location: 'New York, NY',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery']
  },
  {
    id: 'u-of-washington',
    name: 'University of Washington Medical Center',
    location: 'Seattle, WA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr', 'radiation-oncology']
  },
  {
    id: 'ohio-state',
    name: 'Ohio State University Wexner Medical Center',
    location: 'Columbus, OH',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'university-of-texas-southwestern',
    name: 'UT Southwestern Medical Center',
    location: 'Dallas, TX',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr', 'radiation-oncology']
  },
  {
    id: 'university-of-texas-houston',
    name: 'UTHealth McGovern Medical School',
    location: 'Houston, TX',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'indiana-university',
    name: 'Indiana University School of Medicine',
    location: 'Indianapolis, IN',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-minnesota',
    name: 'University of Minnesota Medical Center',
    location: 'Minneapolis, MN',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-iowa',
    name: 'University of Iowa Hospitals and Clinics',
    location: 'Iowa City, IA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'u-of-colorado',
    name: 'University of Colorado Hospital',
    location: 'Aurora, CO',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-utah',
    name: 'University of Utah Hospital',
    location: 'Salt Lake City, UT',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-arizona',
    name: 'University of Arizona Medical Center',
    location: 'Tucson, AZ',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'u-of-alabama',
    name: 'University of Alabama Hospital',
    location: 'Birmingham, AL',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-kentucky',
    name: 'University of Kentucky Medical Center',
    location: 'Lexington, KY',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'u-of-louisville',
    name: 'University of Louisville Hospital',
    location: 'Louisville, KY',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'otolaryngology', 'pmr']
  },
  {
    id: 'u-of-tennessee',
    name: 'University of Tennessee Medical Center',
    location: 'Knoxville, TN',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'u-of-florida',
    name: 'UF Health Shands Hospital',
    location: 'Gainesville, FL',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'u-of-miami',
    name: 'Jackson Memorial Hospital / University of Miami',
    location: 'Miami, FL',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'u-of-south-florida',
    name: 'USF Health Morsani College of Medicine',
    location: 'Tampa, FL',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'medical-college-of-wisconsin',
    name: 'Medical College of Wisconsin',
    location: 'Milwaukee, WI',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-illinois',
    name: 'University of Illinois Hospital',
    location: 'Chicago, IL',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'rush-university',
    name: 'Rush University Medical Center',
    location: 'Chicago, IL',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'loyola-university',
    name: 'Loyola University Medical Center',
    location: 'Maywood, IL',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'wayne-state',
    name: 'Wayne State University / Detroit Medical Center',
    location: 'Detroit, MI',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-pittsburgh',
    name: 'UPMC (University of Pittsburgh Medical Center)',
    location: 'Pittsburgh, PA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr', 'radiation-oncology']
  },
  {
    id: 'thomas-jefferson',
    name: 'Thomas Jefferson University Hospital',
    location: 'Philadelphia, PA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'temple-university',
    name: 'Temple University Hospital',
    location: 'Philadelphia, PA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'drexel-university',
    name: 'Drexel University College of Medicine',
    location: 'Philadelphia, PA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'georgetown',
    name: 'MedStar Georgetown University Hospital',
    location: 'Washington, DC',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'george-washington',
    name: 'George Washington University Hospital',
    location: 'Washington, DC',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-maryland',
    name: 'University of Maryland Medical Center',
    location: 'Baltimore, MD',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'virginia-commonwealth',
    name: 'VCU Health Medical Center',
    location: 'Richmond, VA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-virginia',
    name: 'University of Virginia Medical Center',
    location: 'Charlottesville, VA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'u-of-rochester',
    name: 'University of Rochester Medical Center',
    location: 'Rochester, NY',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'suny-buffalo',
    name: 'Jacobs School of Medicine / University at Buffalo',
    location: 'Buffalo, NY',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'suny-stony-brook',
    name: 'Stony Brook University Hospital',
    location: 'Stony Brook, NY',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'albert-einstein',
    name: 'Montefiore Medical Center / Albert Einstein College of Medicine',
    location: 'Bronx, NY',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'hackensack-university',
    name: 'Hackensack University Medical Center',
    location: 'Hackensack, NJ',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'rutgers-njms',
    name: 'Rutgers New Jersey Medical School',
    location: 'Newark, NJ',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'rutgers-rwj',
    name: 'Robert Wood Johnson University Hospital',
    location: 'New Brunswick, NJ',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'tufts',
    name: 'Tufts Medical Center',
    location: 'Boston, MA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-vermont',
    name: 'University of Vermont Medical Center',
    location: 'Burlington, VT',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'dartmouth',
    name: 'Dartmouth-Hitchcock Medical Center',
    location: 'Lebanon, NH',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'oregon-health-science',
    name: 'Oregon Health & Science University',
    location: 'Portland, OR',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'uc-irvine',
    name: 'UC Irvine Medical Center',
    location: 'Orange, CA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'kaiser-permanente-los-angeles',
    name: 'Kaiser Permanente Los Angeles Medical Center',
    location: 'Los Angeles, CA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'loma-linda',
    name: 'Loma Linda University Medical Center',
    location: 'Loma Linda, CA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-nebraska',
    name: 'University of Nebraska Medical Center',
    location: 'Omaha, NE',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-kansas',
    name: 'University of Kansas Medical Center',
    location: 'Kansas City, KS',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-missouri-columbia',
    name: 'University of Missouri Hospital',
    location: 'Columbia, MO',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'u-of-arkansas',
    name: 'University of Arkansas for Medical Sciences',
    location: 'Little Rock, AR',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-oklahoma',
    name: 'University of Oklahoma Medical Center',
    location: 'Oklahoma City, OK',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-new-mexico',
    name: 'University of New Mexico Hospital',
    location: 'Albuquerque, NM',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'texas-tech',
    name: 'Texas Tech University Health Sciences Center',
    location: 'Lubbock, TX',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'university-of-texas-austin',
    name: 'Dell Medical School / University of Texas at Austin',
    location: 'Austin, TX',
    specialties: ['internal-medicine', 'surgery-general', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'tulane',
    name: 'Tulane University Medical Center',
    location: 'New Orleans, LA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'lsu',
    name: 'Louisiana State University Health Sciences Center',
    location: 'New Orleans, LA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-mississippi',
    name: 'University of Mississippi Medical Center',
    location: 'Jackson, MS',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'u-of-south-carolina',
    name: 'University of South Carolina School of Medicine',
    location: 'Columbia, SC',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'medical-university-of-south-carolina',
    name: 'Medical University of South Carolina',
    location: 'Charleston, SC',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'u-of-georgia',
    name: 'Augusta University Medical Center',
    location: 'Augusta, GA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'henry-ford',
    name: 'Henry Ford Hospital',
    location: 'Detroit, MI',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'spectrum-health',
    name: 'Spectrum Health / Michigan State University',
    location: 'Grand Rapids, MI',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'beaumont-royal-oak',
    name: 'Beaumont Hospital - Royal Oak',
    location: 'Royal Oak, MI',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  },
  {
    id: 'u-of-cincinnati',
    name: 'University of Cincinnati Medical Center',
    location: 'Cincinnati, OH',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'case-western-reserve',
    name: 'University Hospitals Cleveland Medical Center',
    location: 'Cleveland, OH',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'plastic-surgery', 'pmr']
  },
  {
    id: 'wright-state',
    name: 'Wright State University Boonshoft School of Medicine',
    location: 'Dayton, OH',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'eastern-virginia-medical-school',
    name: 'Eastern Virginia Medical School',
    location: 'Norfolk, VA',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'eastern-tennessee-state',
    name: 'Quillen College of Medicine / ETSU',
    location: 'Johnson City, TN',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'otolaryngology', 'pmr']
  },
  {
    id: 'marshall-university',
    name: 'Marshall University School of Medicine',
    location: 'Huntington, WV',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'pmr']
  },
  {
    id: 'west-virginia-university',
    name: 'West Virginia University Hospital',
    location: 'Morgantown, WV',
    specialties: ['internal-medicine', 'surgery-general', 'pediatrics', 'emergency-medicine', 'psychiatry', 'neurology', 'radiology-diagnostic', 'anesthesiology', 'obgyn', 'orthopedic-surgery', 'urology', 'pathology', 'dermatology', 'ophthalmology', 'otolaryngology', 'neurosurgery', 'pmr']
  }
];

/**
 * Search hospitals by name
 * @param {string} query - Search query
 * @returns {Array} Matching hospitals
 */
export function searchHospitals(query) {
  if (!query || query.trim() === '') return [];
  const lowerQuery = query.toLowerCase();
  return hospitals.filter(hospital => 
    hospital.name.toLowerCase().includes(lowerQuery) ||
    hospital.location.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get all hospitals
 * @returns {Array} All hospitals
 */
export function getAllHospitals() {
  return hospitals;
}