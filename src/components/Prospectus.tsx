import React from 'react';
import { Download, Eye } from 'lucide-react';

interface ProspectusItem {
  id: string;
  name: string;
  downloadUrl?: string;
  viewUrl?: string;
}

const ProspectusDownloadSection: React.FC = () => {
  const prospectusItems: ProspectusItem[] = [
    {
      id: '1',
      name: 'Pioneer Girls Junior Academy',
      downloadUrl: '/prospectus/pioneer-girls-junior-academy.pdf',
      viewUrl: '/prospectus/view/pioneer-girls-junior-academy'
    },
    {
      id: '2',
      name: 'Pioneer Junior Academy',
      downloadUrl: '/prospectus/pioneer-junior-academy.pdf',
      viewUrl: '/prospectus/view/pioneer-junior-academy'
    },
    {
      id: '3',
      name: 'Pioneer Girls School',
      downloadUrl: '/prospectus/pioneer-girls-school.pdf',
      viewUrl: '/prospectus/view/pioneer-girls-school'
    },
    {
      id: '4',
      name: 'Pioneer School',
      downloadUrl: '/prospectus/pioneer-school.pdf',
      viewUrl: '/prospectus/view/pioneer-school'
    },
    {
      id: '5',
      name: 'St. Paul Thomas Academy',
      downloadUrl: '/prospectus/st-paul-thomas-academy.pdf',
      viewUrl: '/prospectus/view/st-paul-thomas-academy'
    }
  ];

  const handleDownload = (item: ProspectusItem) => {
    if (item.downloadUrl) {
      console.log(`Downloading: ${item.name}`);
      // window.open(item.downloadUrl, '_blank');
    }
  };

  const handleView = (item: ProspectusItem) => {
    if (item.viewUrl) {
      console.log(`Viewing: ${item.name}`);
      // window.open(item.viewUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-orange-400 p-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-orange-400 rounded-lg shadow-xl p-8">
          <h1 className="text-2xl font-bold text-blue-900 text-center mb-8">
            View or download prospectus
          </h1>
          
          <div className="space-y-4">
            {prospectusItems.map((item) => (
              <div key={item.id} className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-800 font-medium text-sm">
                      {item.name}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleView(item)}
                        className="p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-colors duration-200"
                        title="View prospectus"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleDownload(item)}
                        className="p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-colors duration-200"
                        title="Download prospectus"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectusDownloadSection;
