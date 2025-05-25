import { delay, upsertWithChunks } from './common';
import { getCountryDevTrends } from './country-dev-trends';
import { getDevcoopVideos } from './devcoop-videos';
import { getDispatchAgencies } from './dispatch-agencies';
import { getGlobalTraining } from './global-training';
import { getOverseasOffices } from './overseas-offices';
import { getVolunteerGuides } from './volunteer-guides';

/**
 * 한국국제협력단_국별 개발협력동향
 */
async function upsertCountryDevTrends() {
  const countryDevTrends = await getCountryDevTrends({});
  await upsertWithChunks('country_dev_trends', countryDevTrends, 'country_dev_trend_id');
}

/**
 * 한국국제협력단_개발협력 영상정보
 */
async function upsertDevcoopVideos() {
  const devcoopVideos = await getDevcoopVideos({});
  await upsertWithChunks('devcoop_videos', devcoopVideos, 'devcoop_video_id');
}

/**
 * 한국국제협력단_봉사활동 안내서
 */
async function upsertVolunteerGuides() {
  const volunteerGuides = await getVolunteerGuides({});
  await upsertWithChunks('volunteer_guides', volunteerGuides, 'volunteer_guide_id');
}

/**
 * 한국국제협력단_해외사무소 정보
 */
async function upsertOverseasOffices() {
  const overseasOffices = await getOverseasOffices({});
  await upsertWithChunks('overseas_offices', overseasOffices, 'overseas_office_id');
}

/**
 * 한국국제협력단_국제훈련 정보
 */
async function upsertGlobalTraining() {
  const globalTraining = await getGlobalTraining({});
  await upsertWithChunks('global_training', globalTraining, 'global_training_id');
}

/**
 * 한국국제협력단_해외봉사단 파견기관정보
 */
async function upsertDispatchAgencies() {
  const dispatchAgencies = await getDispatchAgencies({});
  await upsertWithChunks('dispatch_agencies', dispatchAgencies, 'dispatch_agency_id');
}

async function main() {
  console.log('Upserting to Supabase...');
  try {
    await upsertCountryDevTrends();
    await delay(2000);
    await upsertDevcoopVideos();
    await delay(2000);
    await upsertVolunteerGuides();
    await delay(2000);
    await upsertOverseasOffices();
    await delay(2000);
    await upsertGlobalTraining();
    await delay(2000);
    await upsertDispatchAgencies();
    console.log('Done.');
  } catch (error) {
    console.error('Script failed:', error);
    process.exit(1);
  }
}

main().catch(console.error);
