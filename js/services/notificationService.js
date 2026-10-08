/**
 * Farmer Connect Portal - Notification Service
 * Manages unread agromet advisories, rain alerts, and mandi benchmark notifications.
 */

const STORAGE_NOTIF_KEY = 'fc_notifications';

const INITIAL_NOTIFICATIONS = [
  {
    id: 'n1',
    title: 'Rain Expected Tomorrow 🌧️',
    message: 'Guntur Agromet Advisory: Moderate to heavy rain expected. DO NOT IRRIGATE TODAY to preserve soil nitrogen.',
    time: '30 mins ago',
    category: 'Weather Alert',
    read: false
  },
  {
    id: 'n2',
    title: 'Paddy Mandi Benchmark Up +2.2% 📈',
    message: 'Guntur APMC Yard: Paddy (Common) rates increased to ₹2,300/quintal due to mill demand.',
    time: '2 hours ago',
    category: 'Price Alert',
    read: false
  },
  {
    id: 'n3',
    title: 'PM-KISAN 17th Installment Credited 🏛️',
    message: '₹2,000 direct benefit transfer released to eligible Aadhaar-seeded bank accounts.',
    time: '1 day ago',
    category: 'Govt Scheme',
    read: true
  }
];

class NotificationService {
  getNotifications() {
    try {
      const s = localStorage.getItem(STORAGE_NOTIF_KEY);
      if (s) return JSON.parse(s);
    } catch(e){}
    return INITIAL_NOTIFICATIONS;
  }

  getUnreadCount() {
    const list = this.getNotifications();
    return list.filter(n => !n.read).length;
  }

  markAsRead(id) {
    const list = this.getNotifications();
    const updated = list.map(n => n.id === id ? { ...n, read: true } : n);
    this.save(updated);
    return updated;
  }

  markAllAsRead() {
    const list = this.getNotifications();
    const updated = list.map(n => ({ ...n, read: true }));
    this.save(updated);
    return updated;
  }

  clearAll() {
    this.save([]);
    return [];
  }

  save(list) {
    try {
      localStorage.setItem(STORAGE_NOTIF_KEY, JSON.stringify(list));
    } catch(e){}
  }
}

export const notificationService = new NotificationService();
